import { Routes } from '@angular/router';
import { QuestionComponent } from './components/question/question.component';
import { NewPollComponent } from './components/new-poll/new-poll.component';

export const routes: Routes = [
  { path: '', component: QuestionComponent },
  { path: 'uj', component: NewPollComponent }
];
