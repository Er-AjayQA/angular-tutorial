import { Component } from '@angular/core';

@Component({
  selector: 'app-dynamic-styling',
  imports: [],
  templateUrl: './dynamic-styling.html',
  styleUrl: './dynamic-styling.css',
})
export class DynamicStyling {
  bgColor = 'red';
  color = 'white';
  fontSize = 70;
}
