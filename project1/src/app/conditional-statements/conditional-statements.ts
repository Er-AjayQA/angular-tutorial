import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-conditional-statements',
  imports: [],
  templateUrl: './conditional-statements.html',
  styleUrl: './conditional-statements.css',
})
export class ConditionalStatements {
  status: any = ['1st-division', '2nd-division', '3rd-division', 'grace', 'fail'];
  output: string = '';
  colorOutput: number = 1;

  switchCaseOutput: string = 'red';

  handleDisplayMessage(event: Event) {
    let marks = (event.target as HTMLInputElement).value;

    if (Number(marks) == null) {
    } else if (Number(marks) >= 60 && Number(marks) <= 100) {
      this.output = this.status[0];
    } else if (Number(marks) < 60 && Number(marks) >= 40) {
      this.output = this.status[1];
    } else if (Number(marks) < 40 && Number(marks) >= 25) {
      this.output = this.status[2];
    } else if (Number(marks) < 25 && Number(marks) >= 20) {
      this.output = this.status[3];
    } else {
      this.output = this.status[4];
    }
  }

  handleColorBoxes(val: string) {
    let data = Number(val);
    this.colorOutput = data;
  }

  handleColorButton(val: number) {
    this.colorOutput = val;
  }

  handleSwitchCaseOutput(val: string) {
    this.switchCaseOutput = val;
  }
}
