import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TodoEditorPageRoutingModule } from './todo-editor-routing.module';

import { TodoEditorPage } from './todo-editor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TodoEditorPageRoutingModule
  ],
  declarations: [TodoEditorPage]
})
export class TodoEditorPageModule {}
