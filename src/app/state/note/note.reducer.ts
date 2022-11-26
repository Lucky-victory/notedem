/* eslint-disable max-len */
import { loadNote, loadNoteFailure, loadNoteSuccess } from './note.actions';
import { StateStatus } from './../app.state';
import { INote } from 'src/app/interfaces/notes.interface';
import { Action, createReducer, on } from '@ngrx/store';

export const noteFeatureKey = 'note';

export interface INoteState {
  note: INote;
  status: StateStatus;
  error: string;
}

export const initialState: INoteState = {
  note: null,
  status: 'loading',
  error: null,
};

export const noteReducer = createReducer(
  initialState,
  on(loadNote, (state) => ({ ...state, status: 'loading', error: null })),
  on(loadNoteSuccess, (state, { note }) => ({
    ...state,
    note,
    status: 'complete',
    error: null,
  })),
  on(loadNoteFailure, (state, { error }) => ({
    ...state,

    status: 'error',
    error,
  }))
);
