import { Router } from '@angular/router';
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
  constructor(private libroservicio:LibroService, private route:Router) { }

  ngOnInit(): void {
    this.obtenerLibro();
  }

  actualizarLibro(id:number){
    this.route.navigate(['/actualizar-libro',id]);
  }

  eliminarLibro(id:number){
    this.libroservicio.eliminarLibroServ(id).subscribe(()=>{

      this.obtenerLibro();
    },error=>console.log(error));
  }

  private obtenerLibro(){
    this.libroservicio.obtenerListaDeLibro().subscribe(dato=>{
    this.libro=dato;
    });
  }
}
