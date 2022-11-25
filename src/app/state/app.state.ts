import { INote } from '../interfaces/notes.interface';
import { INotesState } from './notes/notes.reducer';

export interface AppState {
  notes: INotesState;
  // todos,
}
