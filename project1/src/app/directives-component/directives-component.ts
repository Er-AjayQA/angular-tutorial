import { CommonModule } from '@angular/common';
import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-directives-component',
  imports: [CommonModule],
  templateUrl: './directives-component.html',
  styleUrl: './directives-component.css',
})
export class DirectivesComponent {
  show = true;
  login = true;
  colorBoxes = ['red', 'blue', 'green', 'yellow', 'pink', 'black'];
  currentColorBox = 'red';
  heading = signal(1);

  students = ['Ajay', 'Vijay', 'Anil', 'Vinay', 'Peter'];
  studentsData = [
    { name: 'Ajay', age: 33, email: 'ajay@gmail.com' },
    { name: 'Vijay', age: 30, email: 'vijay@gmail.com' },
    { name: 'Anil', age: 23, email: 'anil@gmail.com' },
    { name: 'Vinay', age: 25, email: 'vinay@gmail.com' },
    { name: 'Peter', age: 21, email: 'peter@gmail.com' },
  ];

  constructor() {
    effect(() => {
      if (this.heading() > 6) {
        this.heading.set(1);
      }
    });
  }

  toggleLogin() {
    this.login = !this.login;
  }

  changeHeading() {
    this.heading.set(this.heading() + 1);
  }

  handleChangeColor(color: string) {
    this.currentColorBox = color;
  }
}
