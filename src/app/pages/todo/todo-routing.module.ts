import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodoPage } from './todo.page';

const routes: Routes = [
  {
    path: '',
    component: TodoPage,
  },
  {
    path: 'edit/:todo_id',
    loadChildren: () =>
      import('../todo-editor/todo-editor.module').then(
        (m) => m.TodoEditorPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodoPageRoutingModule {}
