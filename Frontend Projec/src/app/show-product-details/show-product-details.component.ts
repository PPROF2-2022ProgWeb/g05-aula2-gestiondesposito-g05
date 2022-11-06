import { HttpErrorResponse } from '@angular/common/http';
import { Product } from './../_model/product.model';
import { ProductService } from './../_services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-product-details',
  templateUrl: './show-product-details.component.html',
  styleUrls: ['./show-product-details.component.css']
})
export class ShowProductDetailsComponent implements OnInit {
  productDetails:Product[]=[];
  displayedColumns: string[] = ['Id', 'Nombre', 'Descripción', 'Descuento', 'Precio'];

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.getAllProduct();
  }

  public getAllProduct(){
    this.productService.getAllproducts().subscribe(
      (resp:Product[])=>{
        console.log(resp);
        this.productDetails=resp;
      },(error:HttpErrorResponse)=>{
        console.log(error);
      }

    );
  }
}
