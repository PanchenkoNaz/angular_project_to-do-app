import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {
  taskName: string = '';

  @Output() taskAdded = new EventEmitter<string>();

  addTask() {
    if (this.taskName.trim()) {
      this.taskAdded.emit(this.taskName);
      this.taskName = '';
    }
  }
}
