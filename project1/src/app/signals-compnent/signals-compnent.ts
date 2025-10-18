import { Component, computed, effect, Signal, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-signals-compnent',
  imports: [],
  templateUrl: './signals-compnent.html',
  styleUrl: './signals-compnent.css',
})
export class SignalsCompnent {
  count = signal(10);
  result = 20;
  counter = signal<number>(0);
  data: WritableSignal<number | string> = signal<number | string>(0); // Writable Signals
  value: Signal<number> = computed(() => 200);

  // Computed Signals
  x = signal(10);
  y = signal(20);
  z = computed(() => this.x() + this.y());
  // z = this.x + this.y;

  showValue() {
    console.log('Before changing', this.z());
    this.x.set(100);
    console.log('After changing', this.z());
  }

  constructor() {
    effect(() => {
      console.log('Normal Value : ', this.result);
      console.log('Signal Value: ', this.count());
    });
  }

  updateNormalValue() {
    this.result = 150;
  }

  updateSignalValue() {
    this.count.set(100);
  }

  handleCounter(val: string) {
    if (val === 'dec') {
      // this.counter.set(this.counter() - 1);
      this.counter.update((val) => val - 1);
    }
    if (val === 'reset') {
      // this.counter.set(0);
      this.counter.update((val) => 0);
    }
    if (val === 'inc') {
      // this.counter.set(this.counter() + 1);

      this.counter.update((val) => val + 1);
    }
  }

  updateDataValue(event: Event) {
    this.data.set((event.target as HTMLInputElement).value);
  }
}
