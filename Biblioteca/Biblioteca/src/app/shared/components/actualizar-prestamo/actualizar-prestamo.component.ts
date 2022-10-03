import { LibroClass } from './../../../libro-class';
import { PrestamoServService } from './../../../prestamo-serv.service';
import { PrestamoClass } from './../../../prestamo-class';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuarioClass } from './../../../usuario-class';
import { Component, OnInit } from '@angular/core';
import  swal  from 'sweetalert2';
@Component({
  selector: 'app-actualizar-prestamo',
  templateUrl: './actualizar-prestamo.component.html',
  styleUrls: ['./actualizar-prestamo.component.css']
})
export class ActualizarPrestamoComponent implements OnInit {
  id:number;
  prestamo:PrestamoClass = new PrestamoClass();
  libros:LibroClass[]=[];
  usuarios:UsuarioClass[]=[];

  constructor(private PrestamoServService:PrestamoServService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.PrestamoServService.obtenerListaDeLibro().subscribe(response=>this.libros=response)
    this.PrestamoServService.obtenerListaDeUsuario().subscribe(response2 => this.usuarios = response2)
    this.id = this.route.snapshot.params['id'];
    this.PrestamoServService.obtenerPrestamoPorId(this.id).subscribe(dato =>{
      this.prestamo = dato;
    },error => console.log(error));
  }

  irAlaListaDevPrestamo(){
    this.router.navigate(['/nuevoPrestamo']);
    swal('Prestamo actualizado',`El prestamo id: ${this.prestamo.id} ha sido actualizado con exito`,`success`);
  }

  onSubmit(){
    this.PrestamoServService.actualizarPrestamo(this.id,this.prestamo).subscribe(dato => {
      this.irAlaListaDevPrestamo();
    },error => console.log(error));
  }
}
