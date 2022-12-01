import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { debounce, distinctUntilChanged } from 'rxjs';
import { FormsModule } from '@angular/forms';

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
  constructor() {}

  ngOnInit() {
  
  }
  updateTitle() {
    console.log({
      title:this.title,noteId:this.noteId
    });
    
  }
}
