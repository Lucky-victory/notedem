import { NotePageCardComponent } from './../note-page-card/note-page-card.component';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { INotePage } from 'src/app/interfaces/notes.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { Base64UUID } from 'base64-uuid';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { addPage, deletePage } from 'src/app/state/note/note.actions';
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
  @Output() newPage = new EventEmitter<INotePage>();
  activeNoteId: string;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<AppState>
  ) {}

  ngOnInit() {
    this.activeNoteId = this.route.snapshot.queryParamMap.get('note');
  }
  onEdit(page: INotePage) {
    this.router.navigate(['/notes/edit'], {
      relativeTo: this.route,
      queryParams: {
        page: page?.id,
      },
      queryParamsHandling: 'merge',
      replaceUrl: true,
    });
    this.editPage.emit(page);
  }
  addNewNotePage() {
    const page = {
      id: null,
      content: '',
    };
    // this.newPage.emit(page);
    this.store.dispatch(addPage({ page, noteId: this.activeNoteId }));
  }
}
