import { Component, OnInit } from '@angular/core';
import { INote } from 'src/app/interfaces/notes.interface';

@Component({
  selector: 'nd-note',
  templateUrl: './note.page.html',
  styleUrls: ['./note.page.scss'],
})
export class NotePage implements OnInit {
  noteToEdit: INote;
  constructor() {}

  ngOnInit() {}
  onSplitPaneVisible(event) {}

  onEditNote(note: INote) {
    this.noteToEdit = note;
  }
  segmentChanged(event){
    
  }
}
