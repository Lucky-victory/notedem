/* eslint-disable max-len */
import { NotesService } from './../../services/notes/notes.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loadNote, loadNoteSuccess } from './note.actions';
import { map, switchMap } from 'rxjs';

@Injectable()
export class NoteEffects {
  loadNote$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loadNote),
        switchMap(({ noteId }) =>
          this.noteService
            .getOne(noteId)
            .pipe(map((note) => loadNoteSuccess({ note })))
        )
      ),
    { dispatch: true }
  );

  constructor(private actions$: Actions, private noteService: NotesService) {}
}
