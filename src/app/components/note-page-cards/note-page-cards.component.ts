import { NotePageCardComponent } from './../note-page-card/note-page-card.component';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nd-note-page-cards',
  templateUrl: './note-page-cards.component.html',
  styleUrls: ['./note-page-cards.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, NotePageCardComponent],
})
export class NotePageCardsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
