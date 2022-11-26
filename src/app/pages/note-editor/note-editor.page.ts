import { map, switchMap, tap } from 'rxjs';
/* eslint-disable @typescript-eslint/naming-convention */
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { INote, INotePage } from 'src/app/interfaces/notes.interface';
import {
  ActionSheetController,
  ModalController,
  Platform,
  PopoverController,
} from '@ionic/angular';
import { ActionOptionsComponent } from 'src/app/components/action-options/action-options.component';
import { Store } from '@ngrx/store';
import { loadNote } from 'src/app/state/note/note.actions';
import { selectNote } from 'src/app/state/note/note.selectors';

@Component({
  selector: 'nd-note-editor',
  templateUrl: './note-editor.page.html',
  styleUrls: ['./note-editor.page.scss'],
})
export class NoteEditorPage implements OnInit {
  noteToEdit: INote;
  activeNoteId: string;
  contentsInNote: string;

  pageToEdit: INotePage;
  notes = [1, 2, 3, 1, 1, 1, 1, 1].map((_, i) => ({
    id: `note_${i}`,
    created_at: new Date(166456786436).getTime(),
    updated_at: new Date(166456786436).getTime(),
    user_id: '1',
    title: `Title ${i}`,
    tags: ['first', 'second', 'third'],
    category: `Category ${i + 1}`,
  }));

  noteId: string;
  isMobile: boolean;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private actionSheet: ActionSheetController,
    private popoverCtrl: PopoverController,
    private platform: Platform,
    private store: Store
  ) {
    this.isMobile = this.platform.is('mobile');
  }
  get contents() {
    const contentsInNote = this.noteToEdit?.pages
      ?.map((page) => page?.content)
      .join(' ');

    return contentsInNote;
  }
  get pages() {
    return this.noteToEdit?.pages;
  }
  ngOnInit() {
    const noteInState = this.router.getCurrentNavigation().extras
      .state as INote;

    this.setNoteToEdit(noteInState);
    if (!noteInState) {
      console.log('not state');

      this.route.queryParamMap.subscribe((query) => {
        this.store.dispatch(loadNote({ noteId: query.get('note') }));
        this.store.select(selectNote).subscribe((note) => {
          this.setNoteToEdit(note);
        });
      });
    }
  }

  onPageEdit(page) {
    this.pageToEdit = page;
  }

  showModalOrPopover = async (event, note) => {
    const opts = {
      cssClass: 'nd-action-sheet',
      buttons: [
        {
          text: 'Delete note',
          role: 'destructive',
          icon: 'trash',
          handler: () => {
            console.log('Delete clicked');
          },
        },
      ],
    };
    if (this.isMobile) {
      const sheet = await this.actionSheet.create(opts);
      await sheet.present();
      return;
    }
    const popover = await this.popoverCtrl.create({
      component: ActionOptionsComponent,
      cssClass: 'nd-action-popover',
      event,
      arrow: true,
      dismissOnSelect: true,
      componentProps: {
        content: note,
        buttons: opts.buttons,
      },
    });
    await popover.present();
  };

  setNoteToEdit(note: INote) {
    this.noteToEdit = note;
    this.activeNoteId = note?.id;
    this.pageToEdit = note?.pages && note.pages[0];
  }
}
