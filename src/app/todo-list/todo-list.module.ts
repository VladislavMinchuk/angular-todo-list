import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { TodoListComponent } from './todo-list.component';
import { TodoListItemComponent } from '../todo-list-item/todo-list-item.component';
import { ModalPopupComponent } from '../modal-popup/modal-popup.component';
import { TaskFormComponent } from '../task-form/task-form.component';
import { TextPreviewPipe } from '../text-preview.pipe';

@NgModule({
    imports:      [ BrowserModule, FormsModule, ReactiveFormsModule ],
    declarations: [
        TextPreviewPipe,
        TodoListComponent,
        TodoListItemComponent,
        TaskFormComponent,
        ModalPopupComponent
    ],
    exports: [ TodoListComponent ]
})
export class ToDoListModule { }