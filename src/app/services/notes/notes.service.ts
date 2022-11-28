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
  getOne(noteId: string, params = {}) {
    return this.apiService
      .get<INote>(`notes/${noteId}`, params)
      .pipe(map((res) => res.data));
  }
  update<T = Partial<INote>>(
    noteId: string,
    noteToUpdate: Partial<INote>,
    params = {}
  ) {
    return this.apiService
      .put<T>(`notes/${noteId}`, noteToUpdate, params)
      .pipe(map((res) => res.data));
  }
  updatePage<T = Partial<INote>>(
    noteId: string,
    noteToUpdate: Partial<INote>,
    params = {}
  ) {
    return this.apiService
      .put<T>(`notes/${noteId}`, noteToUpdate, { ...params, part: 'page' })
      .pipe(map((res) => res.data));
  }
  updateTitle<T = Partial<INote>>(
    noteId: string,
    pageToUpdate: INotePage,
    params = {}
  ) {
    return this.apiService
      .put<T>(`notes/${noteId}`, pageToUpdate, { ...params, part: 'title' })
      .pipe(map((res) => res.data));
  }
  delete(noteId: string) {
    return this.apiService
      .delete<INote>(`notes/${noteId}`)
      .pipe(map((res) => res.data));
  }
  deletePage(noteId: string, notePageId: string) {
    return this.apiService
      .delete<INote>(`notes/${noteId}`,{pageId:notePageId})
      .pipe(map((res) => res.data));
  }
}
