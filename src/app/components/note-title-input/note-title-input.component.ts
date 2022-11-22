import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { debounce, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'nd-note-title-input',
  templateUrl: './note-title-input.component.html',
  styleUrls: ['./note-title-input.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule],
})
export class NoteTitleInputComponent implements OnInit {
  @Input() title: string;
  @Input() noteId: string;
  constructor() {}

  ngOnInit() {
    // console.log(this.noteId);
  }
  updateTitle(title) {
    
  }
}
