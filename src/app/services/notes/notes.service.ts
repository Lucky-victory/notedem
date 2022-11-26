import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { INote, INotePage } from 'src/app/interfaces/notes.interface';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root',
})
export class NotesService {
  constructor(private apiService: ApiService) {}

  getAll() {
    return this.apiService.get<INote[]>(`notes`).pipe(map((res) => res.data));
  }
  getOne(noteId: string) {
    return this.apiService
      .get<INote>(`notes/${noteId}`)
      .pipe(map((res) => res.data));
  }
  update(noteId: string, noteToUpdate: Partial<INote>) {
    return this.apiService
      .put<INote>(`notes/${noteId}`, noteToUpdate)
      .pipe(map((res) => res.data));
  }
  updatePage(noteId: string, noteToUpdate: Partial<INote>) {
    return this.apiService
      .put<INote>(`notes/${noteId}`, noteToUpdate)
      .pipe(map((res) => res.data));
  }
  updateTitle(noteId: string, pageToUpdate: INotePage) {
    return this.apiService
      .put<INote>(`notes/${noteId}`, pageToUpdate)
      .pipe(map((res) => res.data));
  }
  delete(noteId: string, noteToUpdate: Partial<INote>) {
    return this.apiService
      .put<INote>(`notes/${noteId}`, noteToUpdate)
      .pipe(map((res) => res.data));
  }
}
