import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PollService } from '../../services/poll.service';
import { v4 as uuidv4 } from 'uuid';
import { Poll } from '../../models/poll.model';


@Component({
  selector: 'app-new-poll',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './new-poll.component.html',
  styleUrls: ['./new-poll.component.scss']
})
export class NewPollComponent {
  question = '';
  options: string[] = ['', ''];

  constructor(private pollService: PollService) {}

  addOption() {
    this.options.push('');
  }
  trackByIndex(index: number): number {
  return index;
  }
  correctAnswerIndex: number | null = null;


  createPoll() {
  if (this.correctAnswerIndex === null) return;

  const poll: Poll = {
    id: uuidv4(),
    question: this.question,
    options: this.options,
    votes: this.options.map(() => 0),
    correctAnswerIndex: this.correctAnswerIndex
  };

  this.pollService.addPoll(poll);
  this.question = '';
  this.options = ['', ''];
  this.correctAnswerIndex = null;
}
}
