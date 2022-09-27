import { Component, OnInit } from '@angular/core';
import { LibroService } from './../../../libro.service';
import { LibroClass } from './../../../libro-class';
@Component({
  selector: 'app-listlibros',
  templateUrl: './listlibros.component.html',
  styleUrls: ['./listlibros.component.css']
})
export class ListlibrosComponent implements OnInit {
  libro:LibroClass[];

  constructor(private libroservicio:LibroService) { }

  ngOnInit(): void {
    this.obtenerLibro();
  }
  private obtenerLibro(){
    this.libroservicio.obtenerListaDeLibro().subscribe(dato=>{
    this.libro=dato;
    });
  }
}
