import { Routes } from '@angular/router';
import { QuestionComponent } from './components/question/question.component';
import { NewPollComponent } from './components/new-poll/new-poll.component';

export const routes: Routes = [
  { path: '', component: QuestionComponent },
  { path: 'uj', component: NewPollComponent },
  {
    path: 'uj-kviz',
    loadComponent: () =>
      import('./components/new-quiz.component').then(m => m.NewQuizComponent)
  },
  {
    path: 'kvizek',
    loadComponent: () =>
      import('./components/quiz-list.component').then(m => m.QuizListComponent)
  },
  {
    path: 'quiz/:id',
    loadComponent: () =>
      import('./components/quiz-run.component').then(m => m.QuizRunComponent)
  }
];

