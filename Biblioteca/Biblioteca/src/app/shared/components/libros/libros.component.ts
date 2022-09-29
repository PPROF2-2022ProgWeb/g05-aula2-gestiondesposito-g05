
import { LibroService } from './../../../libro.service';
import { LibroClass } from './../../../libro-class';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {

  libro:LibroClass= new LibroClass();
  constructor(private LibroServicio: LibroService, private router:Router) { }

  ngOnInit(): void {

  }

  GuardarLibros(){
    this.LibroServicio.registrarLibro(this.libro).subscribe(dato=>{
      console.log(dato);
      this.irALaListaDeLibro();
    },error=>console.log(error));
  }

irALaListaDeLibro(){
  this.router.navigate(['/listaLibros']);
}

  onSubmit(){
    this.GuardarLibros();

  }

}
