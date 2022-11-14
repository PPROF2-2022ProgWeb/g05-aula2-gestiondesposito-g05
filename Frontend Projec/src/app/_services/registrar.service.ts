import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistrarService {

constructor(private httpClient: HttpClient) { }

// public addProduct(registro: FormData){
//   return this.httpClient.post<registro>("http://localhost:9090/addNewProduct",registro);
// }

}
