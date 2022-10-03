import { Router } from '@angular/router';
import { PrestamoServService } from './../../../prestamo-serv.service';
import { PrestamoClass } from './../../../prestamo-class';
import { Component, OnInit } from '@angular/core';
import  swal  from 'sweetalert2';
@Component({
  selector: 'app-nuepre',
  templateUrl: './nuepre.component.html',
  styleUrls: ['./nuepre.component.css']
})
export class NuepreComponent implements OnInit {

  prestamo:PrestamoClass[];
  constructor(private PrestamoServService:PrestamoServService, private route:Router) { }

  ngOnInit(): void {
    this.obtenerPrestamo();
  }

  actualizarPrestamo(id:number){
    this.route.navigate(['/actualizar-prestamo',id]);
  }

  eliminarPrestamo(id:number){
    swal({
      title: '¿Estas seguro?',
      text: "Confirma si deseas eliminar al prestamo",
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
            'Prestamo eliminado',
            'El prestamo ha sido eliminado con exito',
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
