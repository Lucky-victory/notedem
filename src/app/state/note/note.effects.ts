import { INote } from './../../interfaces/notes.interface';
/* eslint-disable max-len */
import { NotesService } from './../../services/notes/notes.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  addPage,
  addPageSuccess,
  deletePage,
  loadNote,
  loadNoteSuccess,
} from './note.actions';
import { map, switchMap, tap } from 'rxjs';
import { INotePage } from 'src/app/interfaces/notes.interface';

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
  addPageToNote$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(addPage),
        switchMap(({ noteId, page }) =>
          this.noteService.updatePage<INote>(noteId, page).pipe(
            tap((note) => console.log({ note }, 'from state effect')),
            map((note) => addPageSuccess({ note }))
          )
        )
      ),
    { dispatch: true }
  );
  deleteNotePage$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(deletePage),
        switchMap(({ noteId, page }) =>
          this.noteService.updatePage<INote>(noteId, page).pipe(
            tap((note) => console.log({ note }, 'from state effect')),
            map((note) => addPageSuccess({ note }))
          )
        )
      ),
    { dispatch: true }
  );

  constructor(private actions$: Actions, private noteService: NotesService) {}
}
