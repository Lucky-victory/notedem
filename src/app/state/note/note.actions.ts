import { INote, INotePage } from './../../interfaces/notes.interface';
import { createAction, props } from '@ngrx/store';

export const loadNote = createAction(
  '[Note] Load Note',
  props<{ noteId: string }>()
);
// export const updateNote = createAction(
//   '[Note] Update Note',
//   props<{ noteId: string ,note:Partial<INote>}>()
//   );
//   export const updateNoteSuccess = createAction(
//     '[Note] Update Note Success',
//     props<{ note: INote }>()
//     );
    export const upsertNote = createAction(
      '[Note] upsert Note',
      props<{ noteId: string,note:Partial<INote> }>()
    );
export const upsertNoteSuccess = createAction(
  '[Note] Upsert Note Success',
  props<{ note: INote }>()
);
export const addPage = createAction(
  '[Note] Add Page',
  props<{ noteId: string; page: INotePage }>()
);
export const deletePageSuccess = createAction(
  '[Note] Delete Page Success',
  props<{ note: INote }>()
);
export const deletePage = createAction(
  '[Note] Delete Page',
  props<{ noteId: string; pageId: string }>()
);
export const addPageSuccess = createAction(
  '[Note] Add Page Success',
  props<{ note: INote }>()
);
export const addPageFailure = createAction(
  '[Note] Add Page Failure',
  props<{ error: string }>()
);


export const loadNoteFailure = createAction(
  '[Note] Load Note Failure',
  props<{ error: string }>()
);
