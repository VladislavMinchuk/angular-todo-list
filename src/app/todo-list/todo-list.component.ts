import { Component } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import ListItem from 'src/interfaces/ListItem';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  closeModal!: string;

  constructor(private modalService: NgbModal) {}
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

  triggerModal(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }

  addItem(modal: any) {
    console.log('addItem');
  }
}
