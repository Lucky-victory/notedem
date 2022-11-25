import { INote } from './../../interfaces/notes.interface';
import { createAction, props } from '@ngrx/store';

export const loadNotes = createAction(
  '[Notes] Load Notes',
  props<{ page?: number; perPage?: number }>()
);

export const loadNotesSuccess = createAction(
  '[Notes] Load Notes Success',
  props<{ notes: INote[] }>()
);

export const loadNotesFailure = createAction(
  '[Notes] Load Notes Failure',
  props<{ error: string }>()
);
