import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Counter } from './counter/counter';
import { Events } from './events/events';
import { Getset } from './getset/getset';
import { ConditionalStatements } from './conditional-statements/conditional-statements';
import { Looping } from './looping/looping';
import { SignalsCompnent } from './signals-compnent/signals-compnent';
import { EffectComponent } from './effect-component/effect-component';
import { ContextualVariables } from './contextual-variables/contextual-variables';
import { TwoWayBinding } from './two-way-binding/two-way-binding';

@Component({
  selector: 'app-root',
  imports: [
    Counter,
    Events,
    Getset,
    ConditionalStatements,
    Looping,
    SignalsCompnent,
    EffectComponent,
    ContextualVariables,
    TwoWayBinding,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('project1');
}
