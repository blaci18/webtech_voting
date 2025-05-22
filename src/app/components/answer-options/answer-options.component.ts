import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Poll } from '../../models/poll.model';
import { PollService } from '../../services/poll.service';
import { ResultComponent } from '../result/result.component';

@Component({
  selector: 'app-answer-options',
  standalone: true,
  imports: [CommonModule, ResultComponent],
  templateUrl: './answer-options.component.html',
  styleUrls: ['./answer-options.component.scss']

})
export class AnswerOptionsComponent {
  @Input() poll!: Poll;
  voted = false;
  selectedIndex: number | null = null;
  constructor(private pollService: PollService) {}

  vote(index: number) {
  this.pollService.vote(this.poll.id, index);
  this.voted = true;
  this.selectedIndex = index;
}

}
