import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {
  count: number = 0;

  handleCounter(type: string) {
    if (type === 'decrement') {
      this.count === 0 ? alert('Can be a -ve value!') : (this.count -= 1);
    }
    if (type === 'reset') {
      this.count = 0;
    }
    if (type === 'increment') {
      this.count += 1;
    }
  }
}
