import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NoteEditorPageRoutingModule } from './note-editor-routing.module';

import { NoteEditorPage } from './note-editor.page';
import { NoteCardsComponent } from 'src/app/components/note-cards/note-cards.component';
import { NotePageCardsComponent } from 'src/app/components/note-page-cards/note-page-cards.component';
import { NoteTitleInputComponent } from 'src/app/components/note-title-input/note-title-input.component';
import { NoteContentInputComponent } from 'src/app/components/note-content-input/note-content-input.component';
import { WordCharacterCounterPipe } from 'src/app/pipes/word-character-counter/word-character-counter.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NoteEditorPageRoutingModule,
    NoteCardsComponent,
    NotePageCardsComponent,
    NoteTitleInputComponent,
    NoteContentInputComponent,
    WordCharacterCounterPipe,
  ],
  declarations: [NoteEditorPage],
})
export class NoteEditorPageModule {}
