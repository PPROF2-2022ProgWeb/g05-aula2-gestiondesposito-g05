import { Component, OnInit } from '@angular/core';
import {productos} from '../../../productos';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {

  productos=productos;
  constructor() { }

  ngOnInit(): void {
  }

}
