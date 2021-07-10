import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { TodoListComponent } from './todo-list.component';
import { TodoListItemComponent } from '../todo-list-item/todo-list-item.component';

@NgModule({
    imports:      [ BrowserModule, FormsModule, ReactiveFormsModule ],
    declarations: [ TodoListComponent, TodoListItemComponent ],
    exports: [ TodoListComponent, TodoListItemComponent ]
})
export class ToDoListModule { }