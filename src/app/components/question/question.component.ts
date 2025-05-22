import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Poll } from '../../models/poll.model';
import { PollService } from '../../services/poll.service';
import { AnswerOptionsComponent } from '../answer-options/answer-options.component';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [CommonModule, AnswerOptionsComponent],
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  polls: Poll[] = [];

  constructor(private pollService: PollService) {}

  ngOnInit() {
    this.polls = this.pollService.getPolls();
  }
}
