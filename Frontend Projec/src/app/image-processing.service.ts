import { Product } from './_model/product.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageProcessingService {

  constructor() { }

  public createImages(product:Product){
    const productImages=product.productImages;
  }
}
