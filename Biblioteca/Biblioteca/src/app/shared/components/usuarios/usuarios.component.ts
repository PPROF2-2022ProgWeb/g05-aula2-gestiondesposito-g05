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

  constructor(private UsuarioServicio: UsuarioServService, private router2:Router) { }

  ngOnInit(): void {

  }

  GuardarUsuario(){
    this.UsuarioServicio.registrarUsuario(this.usuario).subscribe(dato2 => {
      console.log(dato2);
      this.irALaListaDeUsuario();
    },error=>console.log(error));
  }

irALaListaDeUsuario(){
  this.router2.navigate(['/listaUsuarios']);
}

  onSubmit2(){
    this.GuardarUsuario();

  }

}
