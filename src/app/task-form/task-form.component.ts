import { Component, EventEmitter, Output } from '@angular/core';
import TaskForm from 'src/interfaces/TaskForm';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent {
  @Output() onSubmit = new EventEmitter<TaskForm>();
  @Output() onClose = new EventEmitter();

  task: string = '';

  constructor() { }

  submitForm () {
    this.onSubmit.emit({ task: this.task });
  }
  
  closeForm () { this.onClose.emit(); }
}
