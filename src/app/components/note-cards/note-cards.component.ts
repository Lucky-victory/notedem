import { NoteCardComponent } from './../note-card/note-card.component';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nd-note-cards',
  templateUrl: './note-cards.component.html',
  standalone: true,
  imports: [CommonModule, IonicModule,NoteCardComponent],
  styleUrls: ['./note-cards.component.scss'],
})
export class NoteCardsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
