import { ActivatedRoute } from '@angular/router';
import { OrderDetails } from './../_model/order-details.model';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Product } from '../_model/product.model';

@Component({
  selector: 'app-buy-product',
  templateUrl: './buy-product.component.html',
  styleUrls: ['./buy-product.component.css']
})
export class BuyProductComponent implements OnInit {

productDetails: Product[] = [];

  orderDetails: OrderDetails = {
    fullName: '',
    fullAddress: '',
    contactNumber: '',
    alternateContactNumber: '',
    orderProductQuantityList: []
  }

  constructor(private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.productDetails = this.activateRoute.snapshot.data['productDetails'];

    this.productDetails.forEach(
      x=> this.orderDetails.orderProductQuantityList.push(
        {productId: x.productId, quantity:1}
      ));


    console.log(this.productDetails);
    console.log(this.orderDetails);
  }

  public placeOrder(orderForm: NgForm){

  }

}
