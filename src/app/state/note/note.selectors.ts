import { INoteState } from './note.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../app.state';

export const selectOne = (state: AppState) => state.note;
export const selectNote = createSelector(
  selectOne,
  (state: INoteState) => state.note
);
export const selectNoteStatus = createSelector(
  selectOne,
  (state: INoteState) => state.status
);
export const selectNoteError= createSelector(
  selectOne,
  (state: INoteState) => state.error
);
