import { Component } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import ListItem from 'src/interfaces/ListItem';
import TaskForm from 'src/interfaces/TaskForm';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  closeModal!: string;

  constructor(private modalService: NgbModal) {}
  dataObj = new Date();
  toDoList: ListItem[] = [{
    id: 1,
    text: 'Should create To do list app',
    date: new Date(),
    isDone: false
  }];

  get taskCounter(): number {
    return this.toDoList.length;
  };

  checkItem(listItem: ListItem) {
    listItem.isDone = !listItem.isDone;
  }

  triggerModal(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }

  addItem(form: TaskForm) {
    let lastID = this.toDoList[this.toDoList.length - 1].id;

    this.toDoList.push({
      id: ++lastID,
      text: form.task,
      date: new Date(),
      isDone: false
    });
  }
}
