import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NoteEditorPageRoutingModule } from './note-editor-routing.module';

import { NoteEditorPage } from './note-editor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NoteEditorPageRoutingModule
  ],
  declarations: [NoteEditorPage]
})
export class NoteEditorPageModule {}
