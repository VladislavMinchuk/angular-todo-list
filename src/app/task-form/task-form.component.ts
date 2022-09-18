import { Component, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import TaskForm from 'src/interfaces/TaskForm';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent {
  @Output() onSubmit = new EventEmitter<TaskForm>();
  @Output() onClose = new EventEmitter();

  @ViewChild('taskInput', { static: true }) 
  public taskInput!: ElementRef;

  public task: string = '';

  constructor() { }

  submitForm(): void {
    this.onSubmit.emit({ task: this.task });
    this.inputClear();
  }
  
  closeForm(): void {
    this.onClose.emit();
    this.inputClear();
  }

  inputFocus(): void {
    if (this.taskInput) {
      setTimeout(() => {
        this.taskInput.nativeElement.focus()
      }, 100);
    }
  }
  
  inputClear(): void {
    this.task = '';
  }
}
