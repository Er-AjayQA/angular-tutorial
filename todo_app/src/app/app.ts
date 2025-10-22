import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('todo_app');

  task = '';
  taskList: { id: number; task: string }[] = [];

  addNewTask() {
    this.taskList.push({ id: this.taskList.length + 1, task: this.task });
    this.task = '';
  }

  deleteTask(taskId: number) {
    let updatedTasks = this.taskList.filter((data) => data.id !== taskId);

    this.taskList = updatedTasks;
  }
}
