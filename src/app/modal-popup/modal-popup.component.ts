import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-popup',
  templateUrl: './modal-popup.component.html',
  styleUrls: ['./modal-popup.component.scss']
})
export class ModalPopupComponent implements OnInit {

  @Input() title: string = '';

  public isOpen: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public close() {
    this.isOpen = false;
  }

  public open() {
    this.isOpen = true;
  }

}
