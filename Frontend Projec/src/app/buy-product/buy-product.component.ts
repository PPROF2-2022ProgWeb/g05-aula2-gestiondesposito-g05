import { OrderDetails } from './../_model/order-details.model';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buy-product',
  templateUrl: './buy-product.component.html',
  styleUrls: ['./buy-product.component.css']
})
export class BuyProductComponent implements OnInit {

  orderDetails: OrderDetails={
    fullName: '',
    fullAddress: '',
    contactNumber: '',
    alternateContactNumber: '',
    orderProductQuantityList: []
  }

  constructor() { }

  ngOnInit(): void {
  }

  public placeOrder(orderForm: NgForm){

  }

}
