import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LibroClass } from './libro-class';
@Injectable({
  providedIn: 'root'
})
export class LibroService {
    // URL listado de libros desde el backend
    private baseURL2="http://localhost:9010/api/v2/Libros";

    constructor(private HttpClient:HttpClient) { }

    // este metodo nos sirve para obtener los libros
    obtenerListaDeLibro():Observable<LibroClass[]>{
      return this.HttpClient.get<LibroClass[]>(`${this.baseURL2}`);
    }

    // este metodo nos sirve para registrar un Libro
    registrarLibro(Libros:LibroClass):Observable<Object>{
      return  this.HttpClient.post(`${this.baseURL2}`,Libros);
    }

    obtenerLibroPorId(id:number):Observable<LibroClass>{
      return  this.HttpClient.get<LibroClass>(`${this.baseURL2}/${id}`);
    }

    eliminarLibroServ(id:number):Observable<Object>{
      return  this.HttpClient.delete(`${this.baseURL2}/${id}`);
    }

    actualizarLibro(id:number,libro:LibroClass):Observable<Object>{
      return this.HttpClient.put(`${this.baseURL2}/${id}`,libro);
    }

}
