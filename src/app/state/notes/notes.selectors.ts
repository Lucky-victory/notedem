import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { INotesState } from './notes.reducer';

export const selectAll = (state: AppState) => state.notes;
export const selectNotes = createSelector(
  selectAll,
  (state: INotesState) => state.notes
);
export const selectNotesStatus = createSelector(
  selectAll,
  (state: INotesState) => state.status
);
export const selectNotesError = createSelector(
  selectAll,
  (state: INotesState) => state.error
);
