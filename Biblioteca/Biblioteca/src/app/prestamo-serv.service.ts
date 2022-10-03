import { Observable } from 'rxjs';
import { PrestamoClass } from './prestamo-class';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PrestamoServService {
  // URL listado de libros desde el backend
  private baseURL="http://localhost:9010/api/Prestamo";

  constructor(private HttpClient :HttpClient) { }

      // este metodo nos sirve para obtener los libros
      obtenerListaDePrestamo():Observable<PrestamoClass[]>{
        return this.HttpClient.get<PrestamoClass[]>(`${this.baseURL}`);
      }

      // este metodo nos sirve para registrar un Libro
      registrarPrestamo(Prestamo:PrestamoClass):Observable<Object>{
        return  this.HttpClient.post(`${this.baseURL}`,Prestamo);
      }

      obtenerPrestamoPorId(id:number):Observable<PrestamoClass>{
        return  this.HttpClient.get<PrestamoClass>(`${this.baseURL}/${id}`);
      }

      eliminarPrestamoServ(id:number):Observable<Object>{
        return  this.HttpClient.delete(`${this.baseURL}/${id}`);
      }

      actualizarPrestamo(id:number,Prestamo:PrestamoClass):Observable<Object>{
        return this.HttpClient.put(`${this.baseURL}/${id}`,Prestamo);
      }
}
