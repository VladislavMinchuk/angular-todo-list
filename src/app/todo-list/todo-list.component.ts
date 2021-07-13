import { Component } from '@angular/core';
import ListItem from 'src/interfaces/ListItem';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  dataObj = new Date();
  taskCounter: number = 0;
  toDoList: ListItem[] = [{
    id: 1,
    text: 'Should create To do list app',
    date: '12:00',
    isDone: false
  }];

  checkItem(itemId: number) {
    this.toDoList.forEach((item) => {
      if (item.id === itemId) item.isDone = !item.isDone;
    })
  }
}
