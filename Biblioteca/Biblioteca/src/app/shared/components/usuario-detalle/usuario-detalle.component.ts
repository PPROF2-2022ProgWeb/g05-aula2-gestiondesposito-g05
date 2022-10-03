import { UsuarioClass } from './../../../usuario-class';
import { UsuarioServService } from './../../../usuario-serv.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-detalle',
  templateUrl: './usuario-detalle.component.html',
  styleUrls: ['./usuario-detalle.component.css']
})
export class UsuarioDetalleComponent implements OnInit {
id:number;
Usuario:UsuarioClass;

  constructor(private route:ActivatedRoute, private UsuarioServService:UsuarioServService) {

  }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.Usuario=new UsuarioClass();
    this.UsuarioServService.obtenerUsuarioPorId(this.id).subscribe(dato=>{
    this.Usuario= dato;
    });
  }

}
