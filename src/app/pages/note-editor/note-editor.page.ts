import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { INote } from 'src/app/interfaces/notes.interface';

@Component({
  selector: 'nd-note-editor',
  templateUrl: './note-editor.page.html',
  styleUrls: ['./note-editor.page.scss'],
})
export class NoteEditorPage implements OnInit {
  noteToEdit: INote;
  activeNoteId: string;
  activeChapterId: string;

  constructor(private router: Router) {}

  ngOnInit() {
    const noteInState = this.router.getCurrentNavigation().extras
      .state as INote;
    console.log({ noteInState });

    this.noteToEdit = noteInState;
  }
  onSplitPaneVisible(event) {}

  onEditNote(note: INote) {
    this.noteToEdit = note;
  }
}
