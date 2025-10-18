import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Counter } from './counter/counter';
import { Events } from './events/events';
import { Getset } from './getset/getset';
import { ConditionalStatements } from './conditional-statements/conditional-statements';
import { Looping } from './looping/looping';

@Component({
  selector: 'app-root',
  imports: [Counter, Events, Getset, ConditionalStatements, Looping],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('project1');
}
