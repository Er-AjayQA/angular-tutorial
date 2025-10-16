import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  imports: [],
  templateUrl: './events.html',
  styleUrl: './events.css',
})
export class Events {
  output = '';
  mouseEnterLeaveResult: any = 'Enter the cursor in box to view event name.';
  mouseMoveOutResult: any = 'Move the mouse inside the box area to view event name.';

  handleClickEvent(event: any) {
    this.output = event.type;
  }

  handleDblClickEvent(event: any) {
    this.output = event.type;
  }

  handleMouseDownEvent(event: any) {
    this.output = event.type;
  }

  handleMouseUpEvent(event: any) {
    this.output = event.type;
  }

  handleMouseEnterEvent(event: any) {
    this.output = event.type;
  }

  handleMouseLeaveEvent(event: any) {
    this.output = event.type;
  }

  handleMouseMoveEvent(event: any) {
    this.mouseMoveOutResult = `This is ${event.type} event. Now take the cursor out of the box.`;
  }

  handleMouseMoveOutEvent(event: any) {
    this.mouseMoveOutResult = `This is ${event.type} event. Now take the cursor out of the box.`;
  }
}
