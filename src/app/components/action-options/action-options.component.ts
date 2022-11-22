import { ActionSheetButton, IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'nd-action-options',
  templateUrl: './action-options.component.html',
  styleUrls: ['./action-options.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule],
})
export class ActionOptionsComponent implements OnInit {
  @Input() buttons: ActionSheetButton[];

  constructor() {}

  ngOnInit() {}

  onButtonClick(button) {
    button?.handler();
  }
}
