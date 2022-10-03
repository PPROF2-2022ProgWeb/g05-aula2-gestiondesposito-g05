import { Router, ActivatedRoute } from '@angular/router';
import { UsuarioServService } from './../../../usuario-serv.service';
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
  usuario:UsuarioClass = new UsuarioClass();
  constructor(private usuarioServService:UsuarioServService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.usuarioServService.obtenerUsuarioPorId(this.id).subscribe(dato =>{
      this.usuario = dato;
    },error => console.log(error));
  }

  irAlaListaDeUsuario(){
    this.router.navigate(['/empleados']);
    swal('Empleado actualizado',`El empleado ${this.usuario.name} ha sido actualizado con exito`,`success`);
  }

  onSubmit(){
    this.usuarioServService.actualizarUsuario(this.id,this.usuario).subscribe(dato => {
      this. irAlaListaDeUsuario();
    },error => console.log(error));
  }
}
