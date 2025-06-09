import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from '../services/quiz.service';
import { PollService } from '../services/poll.service';
import { Quiz } from '../models/quiz.model';
import { Poll } from '../models/poll.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-quiz-run',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './quiz-run.component.html',
  styleUrls: ['./quiz-run.component.scss']
})
export class QuizRunComponent {
  quiz: Quiz | undefined;
  polls: Poll[] = [];
  selectedAnswers: number[] = [];
  submitted = false;
  score = 0;
  maxScore = 0;

  constructor(
    private route: ActivatedRoute,
    private quizService: QuizService,
    private pollService: PollService
  ) {
    const quizId = this.route.snapshot.paramMap.get('id');
    if (quizId) {
      this.quiz = this.quizService.getQuizById(quizId);
      if (this.quiz) {
        this.polls = this.pollService.getPolls().filter(p => this.quiz?.questionIds.includes(p.id));
        this.selectedAnswers = Array(this.polls.length).fill(-1);
      }
    }
  }

  isActive(): boolean {
    return !!this.quiz && this.quizService.isQuizActive(this.quiz);
  }

  selectAnswer(pollIndex: number, optionIndex: number) {
    this.selectedAnswers[pollIndex] = optionIndex;
  }

  submit() {
  this.submitted = true;
  this.score = 0;
  this.maxScore = this.polls.length;

  this.polls.forEach((poll, i) => {
    const selected = this.selectedAnswers[i];
    if (selected === poll.correctAnswerIndex) {
      this.score++;
    }
  });
}

  isCorrect(poll: Poll, selectedIndex: number): boolean {
    return poll.correctAnswerIndex === selectedIndex;
  }
}