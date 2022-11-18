import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodoEditorPage } from './todo-editor.page';

const routes: Routes = [
  {
    path: '',
    component: TodoEditorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodoEditorPageRoutingModule {}
