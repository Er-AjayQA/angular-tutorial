import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  imports: [],
  templateUrl: './events.html',
  styleUrl: './events.css',
})
export class Events {
  clickResult: any;
  dblClickResult: any;
  mouseUpDownResult: any = 'Click & hold here to view the event name.';
  mouseEnterLeaveResult: any = 'Enter the cursor in box to view event name.';
  mouseMoveOutResult: any = 'Move the mouse inside the box area to view event name.';

  handleClickEvent(event: any) {
    this.clickResult = `This is ${event.type} event.`;
  }

  handleDblClickEvent(event: any) {
    this.dblClickResult = `This is ${event.type} event.`;
  }

  handleMouseDownEvent(event: any) {
    this.mouseUpDownResult = `${event.type}`;
  }

  handleMouseUpEvent(event: any) {
    this.mouseUpDownResult = `${event.type}`;
  }

  handleMouseEnterEvent(event: any) {
    this.mouseEnterLeaveResult = `This is ${event.type} event. Now take the cursor out of the box.`;
  }

  handleMouseLeaveEvent(event: any) {
    this.mouseEnterLeaveResult = `This is ${event.type} event.`;
  }

  handleMouseMoveEvent(event: any) {
    this.mouseMoveOutResult = `This is ${event.type} event. Now take the cursor out of the box.`;
  }

  handleMouseMoveOutEvent(event: any) {
    this.mouseMoveOutResult = `This is ${event.type} event. Now take the cursor out of the box.`;
  }
}
