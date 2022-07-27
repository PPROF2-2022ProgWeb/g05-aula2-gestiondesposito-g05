import { productos } from './productos';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
productos=productos;
 //items=[];

items : string[] = [];


  constructor() { }

  adicionarCarrito(producto: string)
  {
  this.items.push(producto);

  }

  limpiarCarrito(){
    this.items=[];
    return this.items;
  }

  listarCarrito(){
    return this.items;
  }
}
