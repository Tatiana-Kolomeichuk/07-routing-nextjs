type TagNote = "Todo" | "Work" | "Personal" | "Meeting" | "Shopping";

export interface Note {
  content: string;
  id: string;
  tag: TagNote;
  title: string;
  createdAt: string;
  updatedAt: string;
}

export type FetchTagNote =
  | 'Todo'
  | 'Work'
  | 'Personal'
  | 'Meeting'
  | 'Shopping'
  | 'all';
