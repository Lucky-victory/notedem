export interface INote {
  id: string;
  title: string;
  pages: INotePage[];
  // eslint-disable-next-line @typescript-eslint/naming-convention
  updated_at?: number;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  created_at?: number;
  category?: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  user_id: string;
  tags?: string[];
}

export type NewNote = Pick<INote, 'category' | 'pages' | 'title' | 'user_id'>;

export interface INotePage {
  id: string;
  content: string;
}
export type NoteUpdateType = 'title' | 'page' | 'all';
