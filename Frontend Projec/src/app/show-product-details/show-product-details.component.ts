import { ShowProductImagesDialogComponent } from './../show-product-images-dialog/show-product-images-dialog.component';
import { HttpErrorResponse } from '@angular/common/http';
import { Product } from './../_model/product.model';
import { ProductService } from './../_services/product.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-show-product-details',
  templateUrl: './show-product-details.component.html',
  styleUrls: ['./show-product-details.component.css']
})
export class ShowProductDetailsComponent implements OnInit {
  productDetails:Product[]=[];
  displayedColumns: string[] = ['Id', 'Nombre', 'Descripción', 'Descuento', 'Precio', 'Imagenes', 'Modificar', 'Eliminar'];

  constructor(private productService:ProductService, public imagesDialog : MatDialog) { }

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

  deleteProduct(productId){
    //console.log(productId);
    this.productService.deleteProduct(productId).subscribe(
      (resp)=>{
        this.getAllProduct();
      },(error:HttpErrorResponse)=>{
        console.log(error);
      }
    );
  }

  showImages(product: Product){
    //console.log(product);
    this.imagesDialog.open(ShowProductImagesDialogComponent, {
      height:'500px',
      width:'800px'
    });
  }

}
