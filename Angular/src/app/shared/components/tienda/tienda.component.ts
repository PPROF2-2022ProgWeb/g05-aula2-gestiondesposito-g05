import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD

=======
import {productos} from '../../../productos';
import {CarritoService} from '../../../carrito.service';
>>>>>>> b4c8fa3458e925d2f28f844cebe250c70ec0580b
@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {

<<<<<<< HEAD
  constructor() { }
=======
  productos=productos;
  //carrito= new CarritoService();
  constructor(private carrito:CarritoService) { }
>>>>>>> b4c8fa3458e925d2f28f844cebe250c70ec0580b

  ngOnInit(): void {
  }

<<<<<<< HEAD
=======
  adicionarCarrito(producto: any)
  {
    this.carrito.adicionarCarrito(producto);
    window.alert("Producto Agregado "+producto.id);

  }

>>>>>>> b4c8fa3458e925d2f28f844cebe250c70ec0580b
}
