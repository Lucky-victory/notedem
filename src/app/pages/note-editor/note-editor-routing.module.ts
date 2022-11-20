import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoteEditorPage } from './note-editor.page';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('../note-editor/note-editor.module').then(
        (m) => m.NoteEditorPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NoteEditorPageRoutingModule {}
