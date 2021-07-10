import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.scss']
})
export class TodoListItemComponent {
  @Input() itemText: String = '';
  @Input() itemDate: String = '';
  @Input() isChecked: Boolean = false;
  @Output() checkItem = new EventEmitter<number>();
}
