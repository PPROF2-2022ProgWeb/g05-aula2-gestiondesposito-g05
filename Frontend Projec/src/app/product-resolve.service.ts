import { ImageProcessingService } from './image-processing.service';
import { ProductService } from './_services/product.service';
import { Observable, of } from 'rxjs';
import { Product } from './_model/product.model';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductResolveService implements Resolve<Product> {

  constructor(private productService : ProductService,
    private imageProcessingService: ImageProcessingService) { }

  resolve(route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot
    ): Observable<Product> {
    const id = route.paramMap.get("productId");

    if (id){
      //luego hemos obtenido detalles del backend
      return this.productService.getProductDetailsById(id)
      .pipe(
        map(p => this.imageProcessingService.createImages(p))
      );
    }else{

      //devolver producto vacío observable
      return of(this.getProductDetails());
    }
  }

  getProductDetails(){
    return{
        productId:null,
        productName:"",
        productDescription:"",
        productDiscountedPrice: 0,
        productActualPrice: 0,
        productImages:[]
     
    }
  }
}
