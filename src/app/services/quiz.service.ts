import { Injectable } from '@angular/core';
import { Quiz } from '../models/quiz.model';

const isBrowser = typeof window !== 'undefined' && typeof localStorage !== 'undefined';

@Injectable({ providedIn: 'root' })
export class QuizService {
  private readonly storageKey = 'quizzes';

  getQuizzes(): Quiz[] {
    if (!isBrowser) return [];
    const stored = localStorage.getItem(this.storageKey);
    return stored ? JSON.parse(stored) : [];
  }

  addQuiz(quiz: Quiz): void {
     if (!isBrowser) return;
    const quizzes = this.getQuizzes();
    quizzes.push(quiz);
    localStorage.setItem(this.storageKey, JSON.stringify(quizzes));
  }

  getQuizById(id: string): Quiz | undefined {
    return this.getQuizzes().find(q => q.id === id);
  }

  isQuizActive(quiz: Quiz): boolean {
    return !quiz.deadline || new Date(quiz.deadline) > new Date();
  }
}
