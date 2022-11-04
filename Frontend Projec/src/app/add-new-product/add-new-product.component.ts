import { ProductService } from './../_services/product.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Product } from '../_model/product.model';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-add-new-product',
  templateUrl: './add-new-product.component.html',
  styleUrls: ['./add-new-product.component.css']
})
export class AddNewProductComponent implements OnInit {

  product: Product={
    productName:"",
    productDescription:"",
    productDiscountedPrice: 0,
    productActualPrice: 0,
  }
  constructor(private ProductService: ProductService) { }

  ngOnInit(): void {
  }

  addProduct(productForm: NgForm){

    //console.log(this.product);

    this.ProductService.addProduct(this.product).subscribe(
      (Response:Product)=>{
        //console.log(Response);
        productForm.reset();
      },
      (error:HttpErrorResponse)=>{
        console.log(error);
      }
    );
  }
}
