import { Component, Input, Output, EventEmitter } from '@angular/core';
import ListItem from 'src/interfaces/ListItem';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.scss']
})
export class TodoListItemComponent {
  @Input() listItem!: ListItem;
  @Output() doneItem = new EventEmitter<ListItem>();
  @Output() removeItem = new EventEmitter<ListItem>();

  checkItem () {
    this.doneItem.emit(this.listItem);
  }

  remove () {
    this.removeItem.emit(this.listItem);
  }
}
