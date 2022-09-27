import { UsuarioClass } from './../../../usuario-class';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  usuario:UsuarioClass= new UsuarioClass();
  constructor() { }

  ngOnInit(): void {
    console.log(this.usuario);
  }

}
