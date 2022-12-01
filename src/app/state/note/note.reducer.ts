/* eslint-disable max-len */
import {
  addPage,
  addPageSuccess,
  deletePage,
  deletePageSuccess,
  loadNote,
  loadNoteFailure,
  loadNoteSuccess,
  updateNote,
  upsertNoteSuccess,
} from './note.actions';
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
  on(addPage, (state, { page }) => ({
    ...state,
    status: 'adding-page',
  })),
  on(updateNote, (state, action) => ({
    ...state,
    status:'updating'
  })),
  on(deletePage, (state, { pageId }) => ({
    ...state,note:{...state.note,pages:state.note.pages?.filter((page)=>page.id!==pageId)},
    status: 'adding-page',
  })),
  on(addPageSuccess, (state, { note }) => ({
    ...state,
    status: 'complete',
    note,
    error: null,
  })),
  on(deletePageSuccess, (state, { note }) => ({
    ...state,
    status: 'complete',
    note,
    error: null,
  })),
  on(upsertNoteSuccess, (state, { note }) => ({
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
