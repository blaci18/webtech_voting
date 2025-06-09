export interface Quiz {
  id: string;
  title: string;
  questionIds: string[];
  deadline?: string; // ISO string formátumban
}
