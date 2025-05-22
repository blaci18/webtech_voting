import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Poll } from '../../models/poll.model';

@Component({
  selector: 'app-result',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent {
  @Input() poll!: Poll;

  getTotalVotes(): number {
    return this.poll.votes.reduce((a, b) => a + b, 0);
  }

  getPercentage(votes: number): string {
    const total = this.getTotalVotes();
    return total > 0 ? ((votes / total) * 100).toFixed(1) + '%' : '0%';
  }
}
