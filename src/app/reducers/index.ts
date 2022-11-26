import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { AppState } from '../state/app.state';
import { noteReducer } from '../state/note/note.reducer';
import { notesReducer } from '../state/notes/notes.reducer';

export const reducers: ActionReducerMap<AppState> = {
  notes: notesReducer,
  note: noteReducer,
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? []
  : [];
