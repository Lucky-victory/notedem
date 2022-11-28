import { INote, INotePage } from './../../interfaces/notes.interface';
import { createAction, props } from '@ngrx/store';

export const loadNote = createAction(
  '[Note] Load Note',
  props<{ noteId: string }>()
);

export const addPage = createAction(
  '[Note] Add Page',
  props<{ noteId: string; page: INotePage }>()
);
export const deletePageSuccess = createAction(
  '[Note] Delete Page Success',
  props<{ note: INote }>()
);
export const deletePage = createAction(
  '[Note] Delete Page',
  props<{ noteId: string; pageId: string }>()
);
export const addPageSuccess = createAction(
  '[Note] Add Page Success',
  props<{ note: INote }>()
);
export const addPageFailure = createAction(
  '[Note] Add Page Failure',
  props<{ error: string }>()
);

export const loadNoteSuccess = createAction(
  '[Note] Load Note Success',
  props<{ note: INote }>()
);

export const loadNoteFailure = createAction(
  '[Note] Load Note Failure',
  props<{ error: string }>()
);
