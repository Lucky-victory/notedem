import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NoteViewPageRoutingModule } from './note-view-routing.module';

import { NoteViewPage } from './note-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NoteViewPageRoutingModule
  ],
  declarations: [NoteViewPage]
})
export class NoteViewPageModule {}
