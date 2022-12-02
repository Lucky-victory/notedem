import { StateStatus } from './../app.state';
/* eslint-disable max-len */
import { loadNotes, loadNotesFailure, loadNotesSuccess } from './notes.actions';
import { Action, createReducer, on } from '@ngrx/store';
import { INote } from 'src/app/interfaces/notes.interface';
import { State } from 'ionicons/dist/types/stencil-public-runtime';
import { upsertNote, upsertNoteSuccess } from '../note/note.actions';

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
  ,
  on(upsertNote, (state, action) => ({
   ...state
  })),
  on(upsertNoteSuccess,(state, {note}) =>{ 
  const i = state.notes.findIndex(_note => _note.id === note.id);

  
    if (i > -1) {
   

      const notes=state.notes.map((_note)=>_note.id===note.id?note:_note)
      
      return {
        ...state,
        notes
      }
      
    }
    else {

      
      return {
...state,notes:[...state.notes,note]
      }
    }
      
    
   
})
);
