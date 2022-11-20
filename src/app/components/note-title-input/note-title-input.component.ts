import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'nd-note-title-input',
  templateUrl: './note-title-input.component.html',
  styleUrls: ['./note-title-input.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule],
})
export class NoteTitleInputComponent implements OnInit {
  @Input() title = 'No title yet';
  @Input() noteId: string;
  constructor() {}

  ngOnInit() {
    // console.log(this.noteId);
  }
  updateTitle() {
    distinctUntilChanged(() => true);
  }
}
