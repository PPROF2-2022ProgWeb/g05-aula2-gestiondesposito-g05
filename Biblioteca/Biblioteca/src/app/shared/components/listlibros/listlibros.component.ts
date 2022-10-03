import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { LibroService } from './../../../libro.service';
import { LibroClass } from './../../../libro-class';
import  swal  from 'sweetalert2';
@Component({
  selector: 'app-listlibros',
  templateUrl: './listlibros.component.html',
  styleUrls: ['./listlibros.component.css']
})
export class ListlibrosComponent implements OnInit {

  libro:LibroClass[];
  constructor(private libroservicio:LibroService, private route:Router) { }

  ngOnInit(): void {
    this.obtenerLibro();
  }

  actualizarLibro(id:number){
    this.route.navigate(['/actualizar-libro',id]);
  }

  eliminarLibro(id:number){
    swal({
      title: '¿Estas seguro?',
      text: "Confirma si deseas eliminar el Libro",
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
          this.libroservicio.eliminarLibroServ(id).subscribe(dato=>{
          console.log(dato);
          this.obtenerLibro();
          swal(
            'Libro eliminado',
            'El Libro ha sido eliminado con exito',
            'success'
          )
        })
      }
    })
  }


  private obtenerLibro(){
    this.libroservicio.obtenerListaDeLibro().subscribe(dato=>{
    this.libro=dato;
    });
  }

  verDetalleLibro(id:number){
    this.route.navigate(['/detalle-libro',id]);
  }
}
