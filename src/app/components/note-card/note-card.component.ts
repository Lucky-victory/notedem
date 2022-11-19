import { IonicModule } from '@ionic/angular';
import { CommonModule, DOCUMENT } from '@angular/common';
import {
  Component,
  EventEmitter,
  OnInit,
  Input,
  Output,
  AfterViewInit,
  Inject,
  ViewChildren,
  QueryList,
  ElementRef,
} from '@angular/core';
import { INote } from 'src/app/interfaces/notes.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'nd-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule],
})
export class NoteCardComponent implements OnInit, AfterViewInit {
  @Output() edit = new EventEmitter<INote>();
  @Input() note: INote;
  @Input() isActive: boolean;
  @Input() activeNoteId: string;
  @ViewChildren('noteCard') noteCards: QueryList<ElementRef<HTMLDivElement>>;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.activeNoteId = this.route.snapshot.paramMap.get('note_id');
    this.isActive = this.note?.id === this.activeNoteId;
    console.log(this.isActive, 'is active');
  }
  ngAfterViewInit(): void {
    const cardElems = this.noteCards.toArray();

    const cardEl = cardElems.find(
      (el) => el.nativeElement.id === this.activeNoteId
    );
    console.log({ card: cardEl });
    if (cardEl) {
      cardEl.nativeElement.scrollTo({
        top: 100,
        left: 100,
        behavior: 'smooth',
      });
    }
  }
  onEdit(note) {
    console.log(note);

    this.edit.emit(note);
  }
}
