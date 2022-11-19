import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'nd-note-title-input',
  templateUrl: './note-title-input.component.html',
  styleUrls: ['./note-title-input.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule],
})
export class NoteTitleInputComponent implements OnInit {
  @Input() title = 'No title yet';
  constructor() {}

  ngOnInit() {}
}
