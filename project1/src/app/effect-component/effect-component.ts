import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-effect-component',
  imports: [],
  templateUrl: './effect-component.html',
  styleUrl: './effect-component.css',
})
export class EffectComponent {
  counter = signal(0);
  displayBox = false;

  constructor() {
    effect(() => {
      if (this.counter() === 2) {
        this.displayBox = true;

        setTimeout(() => {
          this.displayBox = false;
        }, 2000);
      } else {
        this.displayBox = false;
      }
    });
  }

  toggleBox() {
    this.counter.set(this.counter() + 1);
  }
}
