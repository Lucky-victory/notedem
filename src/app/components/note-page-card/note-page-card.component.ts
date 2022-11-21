import { ActivatedRoute } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { of } from 'rxjs';
import { ShortenPipe } from 'src/app/pipes/shorten/shorten.pipe';
import { INotePage } from 'src/app/interfaces/notes.interface';

@Component({
  selector: 'nd-note-page-card',
  templateUrl: './note-page-card.component.html',
  styleUrls: ['./note-page-card.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, ShortenPipe],
})
export class NotePageCardComponent implements OnInit {
  @Input() active = of(false);
  @Input() page: INotePage = {
    id: '1',
    content: 'page content',
  };
  @Output() editPage = new EventEmitter<INotePage>();
  @Input() pageIndex: number;

  activePageId: string;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParamMap.subscribe((queryParams) => {
      this.activePageId = queryParams.get('page');
      this.active = of(this.page?.id === this.activePageId);
    });
  }
  onEdit(page) {
    this.editPage.emit(page);
  }
}
