import { Component } from '@angular/core';

@Component({
  selector: 'app-looping',
  imports: [],
  templateUrl: './looping.html',
  styleUrl: './looping.css',
})
export class Looping {
  users = ['Ajay', 'Vijay', 'Tony', 'Bruce', 'Sam'];
  students = [
    { name: 'Ajay Kumar', rollNo: '23122', stream: 'Maths' },
    { name: 'Vijay Kumar', rollNo: '43342', stream: 'Science' },
    { name: 'Rahul Singh', rollNo: '78463', stream: 'Commerce' },
    { name: 'Komal Yadav', rollNo: '89342', stream: 'Arts' },
  ];
}
