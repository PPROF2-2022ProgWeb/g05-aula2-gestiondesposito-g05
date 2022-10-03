import { ActivatedRoute, Router } from '@angular/router';
import { LibroService } from './../../../libro.service';
import { LibroClass } from './../../../libro-class';
import { Component, OnInit } from '@angular/core';
import  swal  from 'sweetalert2';
@Component({
  selector: 'app-actualizar-libro',
  templateUrl: './actualizar-libro.component.html',
  styleUrls: ['./actualizar-libro.component.css']
})
export class ActualizarLibroComponent implements OnInit {
  id:number;
  libro:LibroClass = new LibroClass();
  constructor(private LibroService:LibroService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.LibroService.obtenerLibroPorId(this.id).subscribe(dato =>{
      this.libro = dato;
    },error => console.log(error));
  }

  irAlaListaDeLibro(){
    this.router.navigate(['/listaLibros']);
    swal('Libro actualizado',`El libro ${this.libro.title} ha sido actualizado con exito`,`success`);
  }

  onSubmit(){
    this.LibroService.actualizarLibro(this.id,this.libro).subscribe(dato => {
      this. irAlaListaDeLibro();
    },error => console.log(error));
  }
}
