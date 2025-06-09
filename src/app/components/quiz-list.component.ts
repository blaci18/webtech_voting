import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { QuizService } from '../services/quiz.service';
import { Quiz } from '../models/quiz.model';

@Component({
  selector: 'app-quiz-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.scss']
})
export class QuizListComponent {
  quizzes: Quiz[] = [];

  constructor(private quizService: QuizService, private router: Router) {
    this.quizzes = this.quizService.getQuizzes();
  }

  isActive(quiz: Quiz): boolean {
    return this.quizService.isQuizActive(quiz);
  }

  startQuiz(quizId: string) {
    this.router.navigate(['/quiz', quizId]);
  }
}
