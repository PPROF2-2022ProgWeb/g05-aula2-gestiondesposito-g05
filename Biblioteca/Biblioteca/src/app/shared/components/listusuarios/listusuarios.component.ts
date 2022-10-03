import { Router } from '@angular/router';
import { UsuarioServService } from './../../../usuario-serv.service';
import { UsuarioClass } from './../../../usuario-class';
import { Component, OnInit } from '@angular/core';
import  swal  from 'sweetalert2';
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
    swal({
      title: '¿Estas seguro?',
      text: "Confirma si deseas eliminar al usuario",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si , elimínalo',
      cancelButtonText: 'No, cancelar',
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: true
    }).then((result) => {
      if(result.value){
          this.usuarioservicio.eliminarUsuarioServ(id).subscribe(dato=>{
          console.log(dato);
          this.obtenerUsuario();
          swal(
            'Usuario eliminado',
            'El usuario ha sido eliminado con exito',
            'success'
          )
        })
      }
    })
  }


  private obtenerUsuario(){
    this.usuarioservicio.obtenerListaDeUsuario().subscribe(dato=>{
    this.usuario=dato;
    });
  }

  verDetalleUsuario(id:number){
    this.route.navigate(['/detalle-usuario',id]);
  }
}
