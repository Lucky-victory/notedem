import { map, Observable, Subscriber, Subscription, switchMap, tap } from 'rxjs';
/* eslint-disable @typescript-eslint/naming-convention */
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { INote, INotePage } from 'src/app/interfaces/notes.interface';
import {
  ActionSheetController,
  ModalController,
  Platform,
  PopoverController,
} from '@ionic/angular';
import { ActionOptionsComponent } from 'src/app/components/action-options/action-options.component';
import { Store } from '@ngrx/store';
import { addPage, loadNote, upsertNote, upsertNoteSuccess } from 'src/app/state/note/note.actions';
import { selectNote, selectNoteStatus } from 'src/app/state/note/note.selectors';

@Component({
  selector: 'nd-note-editor',
  templateUrl: './note-editor.page.html',
  styleUrls: ['./note-editor.page.scss'],
})
export class NoteEditorPage implements OnInit,OnDestroy {
  noteToEdit: INote;
  activeNoteId: string;
  contentsInNote: string;
  canFetchNote = true;
  pageToEdit: INotePage;
  notes:INote[]=[]
  noteId: string;
  isMobile: boolean;
  activePageId:string
  isUpdating: boolean;
  private isPageSelected:boolean= false;
  private noteStatusSub: Subscription;
  private paramSub: Subscription;
  noteContent: string;
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
   
    if (Array.isArray(this.noteToEdit?.pages)) {
     this.contentsInNote =
        this.noteToEdit?.pages.map((page) => page?.content).join(' ') || '';
    }
return this.contentsInNote
    // return this.noteToEdit?.content;
  }
  /**
   *@todo for implementing pages functionality
   */
  get pages() {
    return this.noteToEdit?.pages;
  }
  ngOnInit() {
    const noteInState = this.router.getCurrentNavigation().extras
      .state as INote;
    this.activeNoteId = this.route.snapshot.queryParamMap.get('note');
    this.noteStatusSub = this.store.select(selectNoteStatus).subscribe((status) => {
      this.isUpdating=status==='updating'
    });
    if (noteInState) {
      
      this.store.dispatch(upsertNoteSuccess({note:noteInState}))
    }
      this.store.select(selectNote).subscribe((note) => {
          this.setNoteToEdit(note);
        });
    if (!noteInState ) {
    

      this.paramSub = this.route.queryParamMap.subscribe((query) => {
        if (!this.isPageSelected) {
          
          this.store.dispatch(loadNote({ noteId: query.get('note') }));
        }
      
      });
    }
  }
 /**
   *@todo for implementing pages functionality
   */
  onPageEdit(page) {
    this.isPageSelected = true;
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
    this.noteContent = note?.content;
  
    this.activePageId = this.route.snapshot.queryParamMap.get('page');
   
    this.pageToEdit = note?.pages && note.pages?.find((page) => page?.id === this.activePageId);

    
    
  }
   /**
   *@todo for implementing pages functionality
   */
  onPageAdd(page: INotePage) {
    // this.canFetchNote = false;

    console.log({ page }, 'new page ');

    // this.store.dispatch(addPage({ page, noteId: this.activeNoteId }));
  }

  ngOnDestroy(): void {
    this.paramSub?.unsubscribe();
    this.noteStatusSub?.unsubscribe()
  }
}
