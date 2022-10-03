import { LibroService } from './../../../libro.service';
import { LibroClass } from './../../../libro-class';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-libro-detalle',
  templateUrl: './libro-detalle.component.html',
  styleUrls: ['./libro-detalle.component.css']
})
export class LibroDetalleComponent implements OnInit {

  id:number;
  Libro:LibroClass;
  constructor(private route:ActivatedRoute,private LibroService:LibroService) {


   }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.Libro=new LibroClass();
    this.LibroService.obtenerLibroPorId(this.id).subscribe(dato=>{
      this.Libro= dato;
      });
  }

}
