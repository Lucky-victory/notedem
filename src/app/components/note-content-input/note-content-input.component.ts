import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { AppState, StateStatus } from 'src/app/state/app.state';
import { Store } from '@ngrx/store';
import { FormsModule } from '@angular/forms';
import { upsertNote } from 'src/app/state/note/note.actions';
import { INotePage } from 'src/app/interfaces/notes.interface';


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
@Input() pages:INotePage[]
  constructor(private store:Store<AppState>) {}

  ngOnInit() {
    
  }
  updateNote() {
  
    const pages = this.pages?.map((page) => {
     return page?.id ===this.notePageId ?{id:this.notePageId,content:this.content}:page
    })
    const data = {
      noteId: this.noteId, note: { pages}
    }
    const thiz = this;
    const update = this.debounce(() =>
      
      thiz.store.dispatch(upsertNote(data))
    );
    update()
  
  }
debounce=(func, timeout = 2000)=>{
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => { func.apply(this, args); }, timeout);
  };
}
}
