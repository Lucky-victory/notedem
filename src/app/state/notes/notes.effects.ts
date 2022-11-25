import { loadNotes, loadNotesSuccess } from './notes.actions';
import { NotesService } from './../../services/notes/notes.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';

@Injectable()
export class NotesEffects {
  loadNotes$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loadNotes),
        switchMap(() =>
          this.noteService
            .getAll()
            .pipe(map((notes) => loadNotesSuccess({ notes })))
        )
      ),
    { dispatch: true }
  );

  constructor(private actions$: Actions, private noteService: NotesService) {}
}
