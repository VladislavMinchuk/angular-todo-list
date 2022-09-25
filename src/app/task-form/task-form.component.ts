import { Component, EventEmitter, Output, HostListener } from '@angular/core';
import TaskForm from 'src/interfaces/TaskForm';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent {
  @HostListener('document:keydown', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    if((event.ctrlKey || event.metaKey) && event.key == 'Enter') {
      this.submitForm();
    }
  }

  @Output() onSubmit = new EventEmitter<TaskForm>();
  @Output() onClose = new EventEmitter();

  public task: string = '';

  constructor() { }

  get isDisabled(): boolean {
    return !this.task.trim();
  }

  submitForm(): void {
    this.task = this.task.trim();
    if (!this.task) return;

    this.onSubmit.emit({ task: this.task });
    this.inputClear();
  }
  
  closeForm(): void {
    this.onClose.emit();
    this.inputClear();
  }

  inputClear(): void {
    this.task = '';
  }
}
