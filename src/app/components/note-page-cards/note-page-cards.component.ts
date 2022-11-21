import { NotePageCardComponent } from './../note-page-card/note-page-card.component';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  Renderer2,
} from '@angular/core';
import { INotePage } from 'src/app/interfaces/notes.interface';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'nd-note-page-cards',
  templateUrl: './note-page-cards.component.html',
  styleUrls: ['./note-page-cards.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, NotePageCardComponent],
})
export class NotePageCardsComponent implements OnInit {
  @Input() pages: INotePage[] = [1, 2, 3, 4, 5, 6, 7, 8].map((page, i) => ({
    id: `page_${i}`,
    content:
      ' content for page Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores quis, molestiae, at eius amet qua' +
      page,
  }));
  @Output() editPage = new EventEmitter<INotePage>();
  constructor(
    private render: Renderer2,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    console.log(this.pages);
  }
  onEdit(page: INotePage) {
    console.log({ page });
    this.router.navigate(['/notes/edit'], {
      relativeTo: this.route,
      queryParams: {
        page: page?.id,
      },
      queryParamsHandling: 'merge',
    });
    this.editPage.emit(page);
  }
}
