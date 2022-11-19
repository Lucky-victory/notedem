import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nd-note-page-card',
  templateUrl: './note-page-card.component.html',
  styleUrls: ['./note-page-card.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule],
})
export class NotePageCardComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
