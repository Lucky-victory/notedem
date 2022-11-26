import { INote } from './../../interfaces/notes.interface';
import { createAction, props } from '@ngrx/store';

export const loadNote = createAction(
  '[Note] Load Note',
  props<{ noteId: string }>()
);

export const loadNoteSuccess = createAction(
  '[Note] Load Note Success',
  props<{ note: INote }>()
);

export const loadNoteFailure = createAction(
  '[Note] Load Note Failure',
  props<{ error: string }>()
);
