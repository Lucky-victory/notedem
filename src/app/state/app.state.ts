import { INote } from '../interfaces/notes.interface';
import { INoteState } from './note/note.reducer';
import { INotesState } from './notes/notes.reducer';

export interface AppState {
  notes: INotesState;
  // todos,
  note: INoteState;
}

export type StateStatus = 'loading' | 'complete' | 'error' | 'adding-page';
