import { Component } from '@angular/core';
import ListItem from 'src/interfaces/ListItem';
import TaskForm from 'src/interfaces/TaskForm';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  constructor() {}

  public dataObj: Date = new Date();

  toDoList: ListItem[] = [{
    id: 1,
    text: 'Should create To do list app',
    date: new Date(),
    isDone: false
  }];

  get taskCounter(): number {
    return this.toDoList.length;
  };

  checkItem(listItem: ListItem): void {
    listItem.isDone = !listItem.isDone;
  }

  addItem(form: TaskForm): void {
    let lastID = this.toDoList[this.toDoList.length - 1]?.id || 0;

    this.toDoList.push({
      id: ++lastID,
      text: form.task,
      date: new Date(),
      isDone: false
    });
  }

  removeItem(listItem: ListItem): void {
    this.toDoList = this.toDoList.filter(item => item.id !== listItem.id);
  }
}
