import { Component } from '@angular/core';

@Component({
  selector: 'app-getset',
  imports: [],
  templateUrl: './getset.html',
  styleUrl: './getset.css',
})
export class Getset {
  output = '';
  displayName = 'Ajay Kumar';

  getName(event: Event) {
    this.output = (event.target as HTMLInputElement).value;
  }

  setName() {
    this.output = this.displayName;
  }

  getEmail(val: string) {
    this.output = val;
  }
}
