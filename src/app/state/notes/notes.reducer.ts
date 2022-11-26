import { StateStatus } from './../app.state';
/* eslint-disable max-len */
import { loadNotes, loadNotesFailure, loadNotesSuccess } from './notes.actions';
import { Action, createReducer, on } from '@ngrx/store';
import { INote } from 'src/app/interfaces/notes.interface';

export const notesFeatureKey = 'notes';

export interface INotesState {
  notes: INote[];
  status: StateStatus;
  error: string | null;
}

export const initialState: INotesState = {
  notes: [],
  status: 'loading',
  error: null,
};

export const notesReducer = createReducer(
  initialState,
  on(loadNotes, (state) => ({ ...state, status: 'loading', error: null })),
  on(loadNotesSuccess, (state, { notes }) => ({
    ...state,
    notes,
    status: 'complete',
    error: null,
  })),
  on(loadNotesFailure, (state,{error}) => ({
    ...state,
    status: 'error',
    error,
  }))
);
