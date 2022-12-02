import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { upsertNote } from 'src/app/state/note/note.actions';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';

@Component({
  selector: 'nd-note-title-input',
  templateUrl: './note-title-input.component.html',
  styleUrls: ['./note-title-input.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule,FormsModule],
})
export class NoteTitleInputComponent implements OnInit {
  @Input() title: string;
  @Input() noteId: string;
  constructor(private store:Store<AppState>) {}

  ngOnInit() {
  
  }
  updateTitle() {
    const data = {
      noteId: this.noteId, note: { title: this.title }
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
