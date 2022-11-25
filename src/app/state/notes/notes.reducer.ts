/* eslint-disable max-len */
import { loadNotes, loadNotesFailure, loadNotesSuccess } from './notes.actions';
import { Action, createReducer, on } from '@ngrx/store';
import { INote } from 'src/app/interfaces/notes.interface';

export const notesFeatureKey = 'notes';

export interface INotesState {
  notes: INote[];
  status: 'loading' | 'error' | 'complete';
  error: string | null;
}

export const initialState: INotesState = {
  notes: [],
  status: 'loading',
  error: null,
};

export const reducer = createReducer(
  initialState,
  on(loadNotes, (state) => ({ ...state, status: 'loading' })),
  on(loadNotesSuccess, (state) => ({
    ...state,
    status: 'complete',
    error: null,
  })),
  on(loadNotesFailure, (state) => ({
    ...state,
    status: 'error',
    error: state.error,
  }))
);
