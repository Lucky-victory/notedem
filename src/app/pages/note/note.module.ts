import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotePageRoutingModule } from './note-routing.module';

import { NotePage } from './note.page';
import { NoteCardsComponent } from 'src/app/components/note-cards/note-cards.component';
import { NotePageCardsComponent } from 'src/app/components/note-page-cards/note-page-cards.component';
import { NoteTitleInputComponent } from 'src/app/components/note-title-input/note-title-input.component';
import { NoteContentInputComponent } from 'src/app/components/note-content-input/note-content-input.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotePageRoutingModule,
    NoteCardsComponent,
    NotePageCardsComponent,
    NoteTitleInputComponent,NoteContentInputComponent
  ],
  declarations: [NotePage],
})
export class NotePageModule {}
