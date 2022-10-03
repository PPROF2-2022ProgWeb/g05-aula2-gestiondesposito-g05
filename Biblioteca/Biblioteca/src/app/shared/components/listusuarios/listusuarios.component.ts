import { Router } from '@angular/router';
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
  constructor(private usuarioservicio:UsuarioServService, private route:Router) { }

  ngOnInit(): void {
    this.obtenerUsuario();
  }

  actualizarUsuario(id:number){
    this.route.navigate(['/actualizar-usuario',id]);
  }

  eliminarUsuario(id:number){
    this.usuarioservicio.eliminarUsuarioServ(id).subscribe(()=>{

      this.obtenerUsuario();
    },error=>console.log(error));
  }
  private obtenerUsuario(){
    this.usuarioservicio.obtenerListaDeUsuario().subscribe(dato=>{
    this.usuario=dato;
    });
  }
}
