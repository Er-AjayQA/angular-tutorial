import { Component } from '@angular/core';

@Component({
  selector: 'app-contextual-variables',
  imports: [],
  templateUrl: './contextual-variables.html',
  styleUrl: './contextual-variables.css',
})
export class ContextualVariables {
  users = ['Ajay', 'Sam', 'Peter', 'Bruce', 'Smith', 'Vinay', 'Tony'];
}
