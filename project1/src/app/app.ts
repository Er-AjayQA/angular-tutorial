import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Counter } from './counter/counter';
import { Events } from './events/events';
import { Getset } from './getset/getset';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Counter, Events, Getset],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('project1');
}
