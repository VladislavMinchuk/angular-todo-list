import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal-popup',
  templateUrl: './modal-popup.component.html',
  styleUrls: ['./modal-popup.component.scss']
})
export class ModalPopupComponent implements OnInit {
  @HostListener('document:keydown.escape', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    this.close();
  }

  @Output() onClose = new EventEmitter();
  @Output() onOpen = new EventEmitter();

  @Input() title: string = '';
  @Input() showCloseBtn: boolean = true;

  public isOpen: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public close() {
    this.isOpen = false;
    this.onClose.emit('onClose');
  }
  
  public open() {
    this.isOpen = true;
    this.onOpen.emit('onOpen');
  }

}
