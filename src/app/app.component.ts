import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tasks: string[] = [];

  addTask(task: string) {
    this.tasks.push(task);
  }

  removeTask(index: number) {
    this.tasks.splice(index, 1);
  }
}
