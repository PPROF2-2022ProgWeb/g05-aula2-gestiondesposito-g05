import { UsuarioClass } from './../../../usuario-class';
import { LibroClass } from './../../../libro-class';
import { Router } from '@angular/router';
import { PrestamoServService } from './../../../prestamo-serv.service';
import { PrestamoClass } from './../../../prestamo-class';
import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import  swal  from 'sweetalert2';
@Component({
  selector: 'app-prestamo',
  templateUrl: './prestamo.component.html',
  styleUrls: ['./prestamo.component.css']
})
export class PrestamoComponent implements OnInit {

  prestamo:PrestamoClass= new PrestamoClass();
  libros:LibroClass[]=[];
  usuarios:UsuarioClass[]=[];

  constructor(private PrestamoServService: PrestamoServService, private router2:Router) { }

  ngOnInit(): void {

    this.PrestamoServService.obtenerListaDeLibro().subscribe(response=>this.libros=response)
    this.PrestamoServService.obtenerListaDeUsuario().subscribe(response2 => this.usuarios = response2)

  }
  GuardarPrestamo(){
    this.PrestamoServService.registrarPrestamo(this.prestamo).subscribe(dato2 => {
      console.log(dato2);
      this.irALaListaDePrestamo();
    },error=>console.log(error));
  }

irALaListaDePrestamo(){
  this.router2.navigate(['/nuevoPrestamo']);
  swal('Prestamo actualizado',`El prestamo id: ${this.prestamo.id} ha sido actualizado con exito`,`success`);
}

  onSubmit3(){
    this.GuardarPrestamo();

  }



}
