import { UsuarioServService } from './../../../usuario-serv.service';
import { UsuarioClass } from './../../../usuario-class';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listusuarios',
  templateUrl: './listusuarios.component.html',
  styleUrls: ['./listusuarios.component.css']
})
export class ListusuariosComponent implements OnInit {

  usuario:UsuarioClass[];
  constructor(private usuarioservicio:UsuarioServService) { }

  ngOnInit(): void {
    this.obtenerUsuario();
  }
  private obtenerUsuario(){
    this.usuarioservicio.obtenerListaDeUsuario().subscribe(dato=>{
    this.usuario=dato;
    });
  }
}
