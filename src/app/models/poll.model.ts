export interface Poll {
  id: string;
  question: string;
  options: string[];
  votes: number[];
  correctAnswerIndex?: number;
}
