import { Router } from '@angular/router';
import { PrestamoServService } from './../../../prestamo-serv.service';
import { PrestamoClass } from './../../../prestamo-class';
import { Component, OnInit } from '@angular/core';
import  swal  from 'sweetalert2';
@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {

  prestamo:PrestamoClass[];
  constructor(private PrestamoServService:PrestamoServService, private route:Router) { }

  ngOnInit(): void {
    this.obtenerPrestamo();
  }

  actualizarPrestamo(id:number){
    this.route.navigate(['/actualizar-usuario',id]);
  }

  eliminarPrestamo(id:number){
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
          this.PrestamoServService.eliminarPrestamoServ(id).subscribe(dato=>{
          console.log(dato);
          this.obtenerPrestamo();
          swal(
            'Usuario eliminado',
            'El usuario ha sido eliminado con exito',
            'success'
          )
        })
      }
    })
  }


  private obtenerPrestamo(){
    this.PrestamoServService.obtenerListaDePrestamo().subscribe(dato=>{
    this.prestamo=dato;
    });
  }

  verDetallePrestamo(id:number){
    this.route.navigate(['/detalle-prestamo',id]);
  }
}
