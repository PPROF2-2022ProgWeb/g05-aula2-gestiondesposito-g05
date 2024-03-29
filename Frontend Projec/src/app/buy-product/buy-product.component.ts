import { Product } from './../_model/product.model';
import { ProductService } from './../_services/product.service';
import { ActivatedRoute } from '@angular/router';
import { OrderDetails } from './../_model/order-details.model';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-buy-product',
  templateUrl: './buy-product.component.html',
  styleUrls: ['./buy-product.component.css']
})
export class BuyProductComponent implements OnInit {

productDetails: Product[]=[];
var1: string;
quantity: number = 1;
  orderDetails: OrderDetails = {
    fullName: '',
    fullAddress: '',
    contactNumber: '',
    alternateContactNumber: '',
    orderProductQuantityList: []
  }

  constructor(private activateRoute: ActivatedRoute,
    private productService: ProductService) { }

  ngOnInit(): void {
   // this.productDetails = this.activateRoute.snapshot.data['productDetails'];

    //console.log(this.productDetails);
   // console.log(this.orderDetails);
     
    this.barrerProducto();

    this.productDetails.forEach( beer=>{
      this.orderDetails.orderProductQuantityList.push(
        {productId: beer.productId, quantity: 1}
    )});

  }

  barrerProducto(){
   /*
    this.var1= localStorage.getItem("1")
    let producto: Product = JSON.parse(this.var1)
    console.log(producto);
    this.productDetails[0]=producto!
    console.log(this.productDetails);*/

    for(var i=0; i<20; i++){
      //console.log(i);
      this.var1= localStorage.getItem(i.toString())
      //console.log(this.var1);
      if(this.var1!=null){
        console.log(i.toString());
        let producto: Product = JSON.parse(this.var1)
        this.productDetails[0]=producto!
      }
     // this.var1= localStorage.getItem("1")
     //let producto: Product = JSON.parse(this.var1)
      //console.log(producto);
      //this.productDetails[0]=producto!
      //console.log(this.productDetails);
  
    }


  }
  limpiar(){
    for(var i=0; i<20; i++){
  
  
    }
  }
  public placeOrder(orderForm: NgForm){
    this.productService.placeOrder(this.orderDetails).subscribe(
      (resp) =>{
        console.log(resp);
        orderForm.reset;
      },
      (err) =>{
        console.log(err);
      }
    );
  }

  getQuantitiFormProduct(productid){
    const filterProduct = this.orderDetails.orderProductQuantityList.filter(
      (productQuantity) => productQuantity.productId === productid
    );
    return filterProduct[0].quantity;
  }

  getCalculatedTotal(productid , productDiscountedPrice){
    const filteredProduct = this.orderDetails.orderProductQuantityList.filter(
      (productQuantity) => productQuantity.productId === productid
    );
    return filteredProduct[0].quantity * productDiscountedPrice;
  }

  onQuantityChanged(q, productid){
    this.orderDetails.orderProductQuantityList.filter(
      (orderProduct) => orderProduct.productId === productid
    )[0].quantity = q;
  }

  getCalculatorGrandTotal(){
    let grandTotal =0;

    this.orderDetails.orderProductQuantityList.forEach(
      (productQuantity) => {
        const price = this.productDetails.filter(product =>product.productId === productQuantity.productId)[0].productDiscountedPrice;
        grandTotal = grandTotal + price * productQuantity.quantity;
      });
        return grandTotal;
      }
  
}
