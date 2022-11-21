import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { INote, INotePage } from 'src/app/interfaces/notes.interface';

@Component({
  selector: 'nd-note-editor',
  templateUrl: './note-editor.page.html',
  styleUrls: ['./note-editor.page.scss'],
})
export class NoteEditorPage implements OnInit {
  noteToEdit: INote;
  activeNoteId: string;
  activeChapterId: string;
  pageToEdit: INotePage;
  constructor(private router: Router) {}

  ngOnInit() {
    const noteInState = this.router.getCurrentNavigation().extras
      .state as INote;
    console.log({ noteInState });

    this.noteToEdit = noteInState;
    this.pageToEdit = noteInState?.pages[0];
  }

  onPageEdit(page) {
    console.log(page, 'page in editor');

    this.pageToEdit = page;
  }
}
