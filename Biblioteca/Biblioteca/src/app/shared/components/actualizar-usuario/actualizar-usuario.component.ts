import  swal  from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { UsuarioClass } from './../../../usuario-class';
import { UsuarioServService } from './../../../usuario-serv.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-actualizar-usuario',
  templateUrl: './actualizar-usuario.component.html',
  styleUrls: ['./actualizar-usuario.component.css']
})
export class ActualizarUsuarioComponent implements OnInit {

  id:number;
  usuario:UsuarioClass = new UsuarioClass();
  constructor(private UsuarioServService:UsuarioServService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.UsuarioServService.obtenerUsuarioPorId(this.id).subscribe(dato =>{
      this.usuario = dato;
    },error => console.log(error));
  }

  irAlaListaDeUsuario(){
    this.router.navigate(['/listaUsuarios']);
    swal('Usuarios actualizado',`El usuarios ${this.usuario.name} ha sido actualizado con exito`,`success`);
  }

  onSubmit(){
    this.UsuarioServService.actualizarUsuario(this.id,this.usuario).subscribe(dato => {
      this.irAlaListaDeUsuario();
    },error => console.log(error));
  }
}
