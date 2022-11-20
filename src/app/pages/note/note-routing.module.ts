import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotePage } from './note.page';

const routes: Routes = [
  {
    path: '',
    component: NotePage,
  },

  {
    path: 'edit',
    loadChildren: () =>
      import('../note-editor/note-editor.module').then(
        (m) => m.NoteEditorPageModule
      ),
  },
  {
    path: 'view/:note_id',
    loadChildren: () =>
      import('../note-view/note-view.module').then((m) => m.NoteViewPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotePageRoutingModule {}
