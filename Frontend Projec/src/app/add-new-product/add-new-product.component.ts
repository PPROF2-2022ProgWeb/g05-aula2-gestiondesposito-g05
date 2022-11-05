import { Product } from './../_model/product.model';
import { FileHandle } from './../_model/file_handle.model';
import { ProductService } from './../_services/product.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
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
    productImages:[]
  }
  constructor(private ProductService: ProductService,
    private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

  addProduct(productForm: NgForm){

    const productFormData = this.prepareFormData(this.product);

    //console.log(this.product);

    this.ProductService.addProduct(productFormData).subscribe(
      (response:Product)=>{
        //console.log(Response);
        productForm.reset();
      },
      (error:HttpErrorResponse)=>{
        console.log(error);
      }
    );
  }

  prepareFormData(product: Product):FormData{
    const formData=new FormData();
    formData.append(
      'product',
      new Blob([JSON.stringify(product)],{type:'application/json'})   
    );
    for(var i=0; i<product.productImages.length; i++){
      formData.append(
        'imageFile',
        product.productImages[i].file,
        product.productImages[i].file.name
      );
    }
  return formData;
  }

  onFileSelected(event){

    if(event.target.files)
    {
      const file = event.target.files[0];
      const filehandle: FileHandle={
        file: file,
        url: this.sanitizer.bypassSecurityTrustUrl(
          window.URL.createObjectURL(file)
        )

      }
      this.product.productImages.push(filehandle);
    }
    //console.log(event);
  }
}
