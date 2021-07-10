import { Component, OnInit } from '@angular/core';

class Item {
  name: String;
  price: Number;
  done: Boolean;

  constructor (name: String, price: Number) {
    this.name = name;
    this.price = price;
    this.done = false;
  }
}

@Component({
  selector: 'app-frs',
  templateUrl: './frs.component.html',
  styleUrls: ['./frs.component.scss']
})
export class FrsComponent implements OnInit {
  name: String = '';
  price: Number = 0;
  itemsList: Item[] = [
    { name: 'Car', price: 2344, done: false },
    { name: 'Home', price: 123333, done: true },
  ];

  // constructor() { }

  ngOnInit(): void {
    console.log(this);
  }

  addItem (name: String, price: Number) {
    if(name === null || name.trim() === "" || price == null) {
      return;
    }

    this.itemsList.push(new Item(name, price));
  }

  removeItem(index: Number){
    this.itemsList = this.itemsList.filter((item, idx) => idx !== index);
  }

}
