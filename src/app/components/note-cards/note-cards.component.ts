/* eslint-disable @typescript-eslint/naming-convention */
import { NoteCardComponent } from './../note-card/note-card.component';
import { IonicModule, NavController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { INote } from 'src/app/interfaces/notes.interface';
import { firstValueFrom, from, Observable, of } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { selectNotes } from 'src/app/state/notes/notes.selectors';
import { AppState } from 'src/app/state/app.state';
import { Store } from '@ngrx/store';
import { loadNotes } from 'src/app/state/notes/notes.actions';

@Component({
  selector: 'nd-note-cards',
  templateUrl: './note-cards.component.html',
  standalone: true,
  imports: [CommonModule, IonicModule, NoteCardComponent],
  styleUrls: ['./note-cards.component.scss'],
})
export class NoteCardsComponent implements OnInit {
  @Input() canNavigate = true;
  @Input() activeNoteId: string;
  @Input() notes$: Observable<INote[]>;

  @Output() edit = new EventEmitter<INote>();

  constructor(
    private navCtrl: NavController,
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<AppState>
  ) {}

  ngOnInit() {
    this.store.dispatch(loadNotes());

    this.notes$ = this.store.select(selectNotes);

  }
  onEdit(note: INote) {
    if (this.canNavigate) {
      this.router.navigate(['/notes/edit'], {
        state: note,
        relativeTo: this.route,
        queryParams: {
          note: note?.id,
          page: note?.pages && note.pages[0]?.id,
        },
      });
    }

    this.edit.emit(note);
  }
}
