import { UsuarioClass } from './usuario-class';
import { LibroClass } from './libro-class';
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
  private baseURL2="http://localhost:9010/api/v2/Libros";
  private baseURL3="http://localhost:9010/api/Usuario";
  constructor(private HttpClient :HttpClient) { }

      // este metodo nos sirve para obtener los prestamos
      obtenerListaDePrestamo():Observable<PrestamoClass[]>{
        return this.HttpClient.get<PrestamoClass[]>(`${this.baseURL}`);
      }

       // este metodo nos sirve para obtener los libros
       obtenerListaDeLibro():Observable<LibroClass[]>{
        return this.HttpClient.get<LibroClass[]>(`${this.baseURL2}`);
      }

       // este metodo nos sirve para obtener los usuarios
       obtenerListaDeUsuario():Observable<UsuarioClass[]>{
        return this.HttpClient.get<UsuarioClass[]>(`${this.baseURL3}`);
      }

      // este metodo nos sirve para registrar un prestamo
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
