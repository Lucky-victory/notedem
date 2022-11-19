import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nd-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss'],standalone:true,imports:[CommonModule,IonicModule]
})
export class NoteCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

}
