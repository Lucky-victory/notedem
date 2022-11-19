import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { INote } from 'src/app/interfaces/notes.interface';

@Component({
  selector: 'nd-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule],
})
export class NoteCardComponent implements OnInit {
  @Output() edit = new EventEmitter<INote>();
  @Input() note: INote;
  constructor() {}

  ngOnInit() {}
  onEdit(note) {
    console.log(note);

    this.edit.emit(note);
  }
}
