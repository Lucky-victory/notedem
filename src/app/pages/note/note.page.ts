import { loadNotes } from './../../state/notes/notes.actions';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { INote } from 'src/app/interfaces/notes.interface';
import { AppState } from 'src/app/state/app.state';
import { selectNotes } from 'src/app/state/notes/notes.selectors';

@Component({
  selector: 'nd-note',
  templateUrl: './note.page.html',
  styleUrls: ['./note.page.scss'],
})
export class NotePage implements OnInit {
  noteToEdit: INote;
  // notes$ = this.store.select(selectNotes);
  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    // this.store.dispatch(loadNotes());
  }
  onSplitPaneVisible(event) {}

  onEditNote(note: INote) {
    this.noteToEdit = note;
  }
  segmentChanged(event) {}
}
