import { UsuarioClass } from './usuario-class';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioServService {

    // URL listado de libros desde el backend
    private baseURL="http://localhost:9010/api/Usuario";

    constructor(private HttpClient : HttpClient) { }

        // este metodo nos sirve para obtener los libros
        obtenerListaDeUsuario():Observable<UsuarioClass[]>{
          return this.HttpClient.get<UsuarioClass[]>(`${this.baseURL}`);
        }

        // este metodo nos sirve para registrar un Libro
        registrarUsuario(Usuario:UsuarioClass):Observable<Object>{
          return  this.HttpClient.post(`${this.baseURL}`,Usuario);
        }

        obtenerUsuarioPorId(id:number):Observable<UsuarioClass>{
          return  this.HttpClient.get<UsuarioClass>(`${this.baseURL}/${id}`);
        }

        eliminarUsuarioServ(id:number):Observable<Object>{
          return  this.HttpClient.delete(`${this.baseURL}/${id}`);
        }

        actualizarUsuario(id:number,Usuario:UsuarioClass):Observable<Object>{
          return this.HttpClient.put(`${this.baseURL}/${id}`,Usuario);
        }

}
