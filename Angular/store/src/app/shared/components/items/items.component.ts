import { Component, OnInit } from '@angular/core';

import { Items } from '../../../models/item';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  items: Items[]=[];
  constructor() { }

  ngOnInit(): void {
    this.items=[
      {
      id:0,
      title:'prueba',
      price:10.5,
      quantity:25,
      completed:false
      },
      {
        id:1,
        title:'prueba1',
        price:20.5,
        quantity:5,
        completed:true
        }

    ];
  }

}
