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
  @Output() importantItem = new EventEmitter<ListItem>();

  public MAX_LENGTH_TASK = 100;

  checkItem () {
    this.doneItem.emit(this.listItem);
  }

  checkImportantItem () {
    this.importantItem.emit(this.listItem)
  }

  remove () {
    this.removeItem.emit(this.listItem);
  }
}
