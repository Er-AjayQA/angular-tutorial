import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  imports: [],
  templateUrl: './events.html',
  styleUrl: './events.css',
})
export class Events {
  output = '';
  bulbStatus: boolean = true;

  keyboardOutput: string = '';
  keyboardBulbStatus: boolean = true;

  focusOutput: string = '';
  focusBulbStatus: boolean = true;

  formTextDisplay: string = '';
  formOutput: string = '';
  formBulbStatus: boolean = true;

  // Handle Bulb On/Off on Mouse Click
  handleBulbOnOff() {
    this.bulbStatus = this.bulbStatus == true ? false : true;
  }

  // Handle Keyboard Bulb On/Off
  handleKeyboardBulbOnOff(event: Event) {
    this.keyboardOutput = event.type;
    this.keyboardBulbStatus = this.keyboardBulbStatus == true ? false : true;
  }

  // Handle Focus
  handleFocusBulbOnOff(event: Event) {
    this.focusOutput = event.type;
    this.focusBulbStatus = this.focusBulbStatus == true ? false : true;
  }

  // Handle Form
  handleFormBulbOnOff(event: any) {
    this.formOutput = event.type;
    this.formTextDisplay = (event.target as HTMLInputElement).value;
    this.formBulbStatus = this.formBulbStatus == true ? false : true;
  }
}
