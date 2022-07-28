import { Component, OnInit } from '@angular/core';
import {productos} from '../../../productos';
import {CarritoService} from '../../../carrito.service';
@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {

  productos=productos;
  //carrito= new CarritoService();
  constructor(private carrito:CarritoService) { }

  ngOnInit(): void {
  }

  adicionarCarrito(producto: any)
  {
    this.carrito.adicionarCarrito(producto);
    window.alert("Producto Agregado "+producto.id);

  }

}
