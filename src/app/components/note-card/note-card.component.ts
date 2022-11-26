import { IonicModule, Platform } from '@ionic/angular';
import { CommonModule, DOCUMENT } from '@angular/common';
import {
  Component,
  EventEmitter,
  OnInit,
  Input,
  Output,
  ViewChildren,
  QueryList,
  ElementRef,
} from '@angular/core';
import { INote } from 'src/app/interfaces/notes.interface';
import { ActivatedRoute } from '@angular/router';
import { debounceTime, delay, of, throttle } from 'rxjs';
import { ShortenPipe } from 'src/app/pipes/shorten/shorten.pipe';

@Component({
  selector: 'nd-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, ShortenPipe],
})
export class NoteCardComponent implements OnInit {
  @Output() edit = new EventEmitter<INote>();
  @Input() note: INote;
  @Input() activeNoteId: string;
  @ViewChildren('noteCard') noteCards: QueryList<ElementRef<HTMLDivElement>>;
  active = of(false);
  isMobile: boolean;
  constructor(private route: ActivatedRoute, private platform: Platform) {
    this.isMobile = this.platform.is('mobile');
    this.platform.resize.pipe(debounceTime(1000)).subscribe(() => {
      this.isMobile = this.platform.is('mobile');
      console.log('platform observing', this.isMobile);
    });
  }

  ngOnInit() {
    this.route.queryParamMap.subscribe((queryParam) => {
      this.activeNoteId = queryParam.get('note');
      this.active = of(this.note?.id === this.activeNoteId);
    });
  }

  onEdit(note) {
    this.edit.emit(note);
  }
  limitText(text: string, limit = 30) {
    return text.length > limit ? text.substring(0, limit) + '...' : text;
  }
  onCardClick(note) {
    if (this.isMobile) {
      this.onEdit(note);
    }
  }
}
