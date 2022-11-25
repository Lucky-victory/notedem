/* eslint-disable @typescript-eslint/naming-convention */
import { NoteCardComponent } from './../note-card/note-card.component';
import { IonicModule, NavController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { INote } from 'src/app/interfaces/notes.interface';
import { from, Observable, of } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'nd-note-cards',
  templateUrl: './note-cards.component.html',
  standalone: true,
  imports: [CommonModule, IonicModule, NoteCardComponent],
  styleUrls: ['./note-cards.component.scss'],
})
export class NoteCardsComponent implements OnInit {
  @Input() canNavigate = true;
  @Input() activeNoteId: string;
  @Input() notes: Observable<Partial<INote>[]> = of(
    [1, 2, 3, 1, 1, 1, 1, 1].map((_, i) => ({
      id: `note_${i}`,
      created_at: new Date(166456786436).getTime(),
      updated_at: new Date(166456786436).getTime(),
      user_id: '1',
      tags: ['first', 'second', 'third'],
      category: `Category ${i + 1}`,
      title: `Title ${i}`,
      // pages: [
      //   {
      //     id: 'page_0',
      //     content:
      //       ' content for page Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores quis, molestiae, at eius amet qua1',
      //   },
      //   {
      //     id: 'page_1',
      //     content:
      //       ' content for page Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores quis, molestiae, at eius amet qua2',
      //   },
      //   {
      //     id: 'page_2',
      //     content:
      //       ' content for page Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores quis, molestiae, at eius amet qua3',
      //   },
      //   {
      //     id: 'page_3',
      //     content:
      //       ' content for page Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores quis, molestiae, at eius amet qua4',
      //   },
      //   {
      //     id: 'page_4',
      //     content:
      //       ' content for page Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores quis, molestiae, at eius amet qua5',
      //   },
      //   {
      //     id: 'page_5',
      //     content:
      //       ' content for page Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores quis, molestiae, at eius amet qua6',
      //   },
      //   {
      //     id: 'page_6',
      //     content:
      //       ' content for page Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores quis, molestiae, at eius amet qua7',
      //   },
      //   {
      //     id: 'page_7',
      //     content:
      //       ' content for page Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores quis, molestiae, at eius amet qua8',
      //   },
      // ],
    }))
  );

  @Output() edit = new EventEmitter<INote>();

  constructor(
    private navCtrl: NavController,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {}
  onEdit(note: INote) {
    if (this.canNavigate) {
      this.router.navigate(['/notes/edit'], {
        state: note,
        relativeTo: this.route,
        queryParams: {
          note: note?.id,
          page: note?.pages && note.pages[0]?.id,
        },
      });
    }

    this.edit.emit(note);
  }
}
