import { Component } from '@angular/core';

@Component({
  selector: 'app-getset',
  imports: [],
  templateUrl: './getset.html',
  styleUrl: './getset.css',
})
export class Getset {
  name = '';
  showName = 'Ajay Kumar';
  displayName = 'Ajay Kumar';

  getName(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.name = `${inputElement.value}`;
  }

  renderName() {
    this.showName = this.name;
  }

  setName() {
    this.name = this.displayName;
  }

  getEmail(val: string) {
    console.log(val);
  }
}
