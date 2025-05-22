import { Injectable } from '@angular/core';
import { Poll } from '../models/poll.model';

@Injectable({ providedIn: 'root' })
export class PollService {
  private storageKey = 'polls';

  getPolls(): Poll[] {
  if (typeof window === 'undefined') return [];
  const data = localStorage.getItem(this.storageKey);
  return data ? JSON.parse(data) : [];
}

  addPoll(poll: Poll) {
    const polls = this.getPolls();
    polls.push(poll);
    this.savePolls(polls);
  }

  vote(pollId: string, optionIndex: number) {
    const polls = this.getPolls();
    const poll = polls.find(p => p.id === pollId);
    if (poll) {
      poll.votes[optionIndex]++;
      this.savePolls(polls);
    }
  }

  private savePolls(polls: Poll[]) {
    localStorage.setItem(this.storageKey, JSON.stringify(polls));
  }
}
