import { ActivatedRoute } from '@angular/router';
import { IonicModule, Platform } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { of } from 'rxjs';
import { ShortenPipe } from 'src/app/pipes/shorten/shorten.pipe';
import { INotePage } from 'src/app/interfaces/notes.interface';
import { WordCharacterCounterPipe } from 'src/app/pipes/word-character-counter/word-character-counter.pipe';
import { Store } from '@ngrx/store';
import { deletePage } from 'src/app/state/note/note.actions';

@Component({
  selector: 'nd-note-page-card',
  templateUrl: './note-page-card.component.html',
  styleUrls: ['./note-page-card.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, ShortenPipe, WordCharacterCounterPipe],
})
export class NotePageCardComponent implements OnInit {
  @Input() active = of(false);
  @Input() page: INotePage;
  @Output() editPage = new EventEmitter<INotePage>();
  @Input() pageIndex: number;
  @Input() activeNoteId: string;
  isMobile: boolean;
  activePageId: string;
  constructor(
    private route: ActivatedRoute,
    private platform: Platform,
    private store: Store
  ) {
    this.isMobile = this.platform.is('mobile');
  }

  ngOnInit() {
    this.route.queryParamMap.subscribe((queryParams) => {
      this.activePageId = queryParams.get('page');
      this.active = of(this.page?.id === this.activePageId);
    });
  }
  onEdit(page) {
    this.editPage.emit(page);
  }
  onCardClick(note) {
    if (this.isMobile) {
      this.onEdit(note);
    }
  }
  onDelete(page: INotePage) {
    this.store.dispatch(
      deletePage({ noteId: this.activeNoteId, pageId: page.id })
    );
  }
}
