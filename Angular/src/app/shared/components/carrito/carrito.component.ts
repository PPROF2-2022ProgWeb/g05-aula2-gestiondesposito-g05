import { Component, OnInit } from '@angular/core';
import {CarritoService} from '../../../carrito.service';
@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  //carrito= new CarritoService();
  items : string[] = [];

  constructor(private carrito:CarritoService) { }

  ngOnInit(): void {
    this.items=this.carrito.listarCarrito();
    console.log(this.items);
  }

}
