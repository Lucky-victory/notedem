import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'nd-note-content-input',
  templateUrl: './note-content-input.component.html',
  styleUrls: ['./note-content-input.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule],
})
export class NoteContentInputComponent implements OnInit {
  @Input() content!: string;
  @Input() noteId: string;
  @Input() notePageId: string;
  constructor() {}

  ngOnInit() {
    console.log(this.content);
  }
}
