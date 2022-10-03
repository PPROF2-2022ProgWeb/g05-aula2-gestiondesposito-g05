import { Router } from '@angular/router';
import { PrestamoServService } from './../../../prestamo-serv.service';
import { PrestamoClass } from './../../../prestamo-class';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prestamo',
  templateUrl: './prestamo.component.html',
  styleUrls: ['./prestamo.component.css']
})
export class PrestamoComponent implements OnInit {

  prestamo:PrestamoClass= new PrestamoClass();

  constructor(private PrestamoServService: PrestamoServService, private router2:Router) { }

  ngOnInit(): void {
  }
  GuardarPrestamo(){
    this.PrestamoServService.registrarPrestamo(this.prestamo).subscribe(dato2 => {
      console.log(dato2);
      this.irALaListaDePrestamo();
    },error=>console.log(error));
  }

irALaListaDePrestamo(){
  this.router2.navigate(['/nuevoPrestamo']);
}

  onSubmit2(){
    this.GuardarPrestamo();

  }
}
