import { UsuarioClass } from './../../../usuario-class';
import { PrestamoServService } from './../../../prestamo-serv.service';
import { ActivatedRoute } from '@angular/router';
import { PrestamoClass } from './../../../prestamo-class';
import { Component, OnInit } from '@angular/core';
import { LibroClass } from 'src/app/libro-class';

@Component({
  selector: 'app-prestamo-detalle',
  templateUrl: './prestamo-detalle.component.html',
  styleUrls: ['./prestamo-detalle.component.css']
})
export class PrestamoDetalleComponent implements OnInit {
  id:number;
  Prestamo:PrestamoClass;


  constructor(private route:ActivatedRoute, private PrestamoServService:PrestamoServService) { }

  ngOnInit(): void {

    this.id=this.route.snapshot.params['id'];
    this.Prestamo=new PrestamoClass();
    this.PrestamoServService.obtenerPrestamoPorId(this.id).subscribe(dato=>{
    this.Prestamo= dato;
    });
  }

}
