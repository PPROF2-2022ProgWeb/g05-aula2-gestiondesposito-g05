import { UsuarioServService } from './../../../usuario-serv.service';


import { UsuarioClass } from './../../../usuario-class';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  usuario:UsuarioClass= new UsuarioClass();
  constructor(private usuarioService:UsuarioServService , private router:Router) { }

  ngOnInit(): void {

  }

  GuardarUsuario(){
    this.usuarioService.registrarUsuario(this.usuario).subscribe(dato=>{
      this.irALaListaDeLibro();
      console.log(dato);
    },error => console.log(error));
  }

irALaListaDeLibro(){
  this.router.navigate(['/listaUsuarios']);
}

  onSubmit(){
    this.GuardarUsuario();

  }

}
