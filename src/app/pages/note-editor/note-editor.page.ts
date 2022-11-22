/* eslint-disable @typescript-eslint/naming-convention */
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
  contentsInNote: string;

  pageToEdit: INotePage;
  notes = [1, 2, 3, 1, 1, 1, 1, 1].map((_, i) => ({
    id: `note_${i}`,
    created_at: new Date(166456786436).getTime(),
    updated_at: new Date(166456786436).getTime(),
    user_id: '1',
    title: `Title ${i}`,
    tags: ['first', 'second', 'third'],
    category:`Category ${i+1}`,
    pages: [
      {
        id: 'page_0',
        content:
          ' content for page Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores quis, molestiae, at eius amet qua1',
      },
      {
        id: 'page_1',
        content:
          ' content for page Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores quis, molestiae, at eius amet qua2',
      },
      {
        id: 'page_2',
        content:
          ' content for page Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores quis, molestiae, at eius amet qua3',
      },
      {
        id: 'page_3',
        content:
          ' content for page Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores quis, molestiae, at eius amet qua4',
      },
      {
        id: 'page_4',
        content:
          ' content for page Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores quis, molestiae, at eius amet qua5',
      },
      {
        id: 'page_5',
        content:
          ' content for page Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores quis, molestiae, at eius amet qua6',
      },
      {
        id: 'page_6',
        content:
          ' content for page Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores quis, molestiae, at eius amet qua7',
      },
      {
        id: 'page_7',
        content:
          ' content for page Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores quis, molestiae, at eius amet qua8',
      },
    ],
  }));

  noteId: string;

  constructor(private router: Router, private route: ActivatedRoute) {}
  get contents() {
    const contentsInNote = this.noteToEdit?.pages
      .map((page) => page?.content)
      .join(' ');
    console.log({ contentsInNote });

    return contentsInNote;
  }
  ngOnInit() {
    let noteInState = this.router.getCurrentNavigation().extras.state as INote;
    console.log({ noteInState });
    this.activeNoteId = noteInState?.id;
    this.noteToEdit = noteInState;
    this.pageToEdit = noteInState?.pages[0];
    if (!noteInState) {
      this.noteId = this.route.snapshot.queryParamMap.get('note');

      setTimeout(() => {
        noteInState = this.notes.find((note) => note?.id === this.noteId);
        this.activeNoteId = noteInState?.id;
        this.noteToEdit = noteInState;
        this.pageToEdit = noteInState?.pages[0];
      }, 3000);
    }
  }

  onPageEdit(page) {
    this.pageToEdit = page;
  }
}
