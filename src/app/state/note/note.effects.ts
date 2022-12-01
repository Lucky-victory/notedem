import { INote } from './../../interfaces/notes.interface';
/* eslint-disable max-len */
import { NotesService } from './../../services/notes/notes.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  addPage,
  addPageSuccess,
  deletePage,
  deletePageSuccess,
  loadNote,
  loadNoteSuccess,
  updateNote,
  upsertNote,
  upsertNoteSuccess,
} from './note.actions';
import { debounceTime, map, switchMap, tap, } from 'rxjs';
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
            .pipe(map((note) => upsertNoteSuccess({ note })))
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
            tap((note) => console.log({ note }, 'from page add effect')),
            map((note) => addPageSuccess({ note }))
          )
        )
      ),
    { dispatch: true }
  );
  upsertNote$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(upsertNote),debounceTime(2000),
        switchMap(({ noteId, note }) =>
          this.noteService.update<INote>(noteId,note).pipe(
            tap((note) => console.log({ note }, 'from note upsert effect')),
            map((note) => upsertNoteSuccess({ note }))
          )
        )
      ),
    { dispatch: true }
  );
  deleteNotePage$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(deletePage),
        switchMap(({ noteId, pageId }) =>
          this.noteService.deletePage(noteId, pageId).pipe(
        
            tap((note) => console.log({ note }, 'from page delete effect')),
            map((note) => deletePageSuccess({ note }))
          )
        )
      ),
    { dispatch: true }
  );

  constructor(private actions$: Actions, private noteService: NotesService) {}
}
