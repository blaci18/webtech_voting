import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { v4 as uuidv4 } from 'uuid';
import { PollService } from '../services/poll.service';
import { QuizService } from '../services/quiz.service';
import { Quiz } from '../models/quiz.model';
import { Poll } from '../models/poll.model';

@Component({
  selector: 'app-new-quiz',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './new-quiz.component.html',
  styleUrls: ['./new-quiz.component.scss']
})
export class NewQuizComponent {
  title = '';
  deadline: string = '';
  selectedQuestionIds: string[] = [];
  polls: Poll[] = [];

  constructor(
    private quizService: QuizService,
    private pollService: PollService
  ) {
    this.polls = this.pollService.getPolls();
  }

  toggleQuestion(id: string) {
    if (this.selectedQuestionIds.includes(id)) {
      this.selectedQuestionIds = this.selectedQuestionIds.filter(q => q !== id);
    } else {
      this.selectedQuestionIds.push(id);
    }
  }

  createQuiz() {
    const quiz: Quiz = {
      id: uuidv4(),
      title: this.title,
      questionIds: this.selectedQuestionIds,
      deadline: this.deadline ? new Date(this.deadline).toISOString() : undefined
    };
    this.quizService.addQuiz(quiz);
    this.title = '';
    this.deadline = '';
    this.selectedQuestionIds = [];
  }
}
