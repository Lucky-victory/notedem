import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { AppState, StateStatus } from 'src/app/state/app.state';
import { Store } from '@ngrx/store';
import { FormsModule } from '@angular/forms';
import { updateNote } from 'src/app/state/note/note.actions';
import { debounceTime, delay, of, tap, throttleTime } from 'rxjs';
import { debounce } from 'lodash'

@Component({
  selector: 'nd-note-content-input',
  templateUrl: './note-content-input.component.html',
  styleUrls: ['./note-content-input.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule,FormsModule],
})
export class NoteContentInputComponent implements OnInit {
  @Input() content!: string;
  @Input() noteId: string;
  @Input() notePageId: string;
  @Input() noteStatus: StateStatus;

  constructor(private store:Store<AppState>) {}

  ngOnInit() {
    console.log({
      content: this.content,
      noteId: this.noteId,
      pageId: this.notePageId,
    });
  }
  updateNote() {
    console.log('hellll');
    
    const store = this.store;
    const data = {
      noteId: this.noteId, note: { content: this.content }
    }
    
    this.store.dispatch(updateNote(data))
    debounce(() => {
      console.log('retrgfthjkl');
      
    } ,
    2000)
  }

}
