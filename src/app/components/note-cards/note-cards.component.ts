/* eslint-disable @typescript-eslint/naming-convention */
import { NoteCardComponent } from './../note-card/note-card.component';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { INote } from 'src/app/interfaces/notes.interface';
import { from, Observable, of } from 'rxjs';

@Component({
  selector: 'nd-note-cards',
  templateUrl: './note-cards.component.html',
  standalone: true,
  imports: [CommonModule, IonicModule, NoteCardComponent],
  styleUrls: ['./note-cards.component.scss'],
})
export class NoteCardsComponent implements OnInit {
  @Input() notes: Observable<INote[]> = of(
    [1, 2, 3, 1, 1, 1, 1, 1].map((_, i) => ({
      id: `note_${i}`,
      created_at: new Date(166456786436).getTime(),
      user_id: '1',
      title: `Title ${i}`,
      pages: [
        {
          id: `page_${i}`,
          content:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem dolore error amet volupperferendis! Officiis!',
        },
      ],
    }))
  );
  @Output() edit = new EventEmitter<INote>();

  constructor() {}
  ngOnInit(): void {}
  onEdit(note: INote) {
    console.log(note, 'From cards');
    this.edit.emit(note);
  }
}
