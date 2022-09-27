import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LibroService {

  id:number;
	title:string;
	date:string;
	author:string;
	category:string;
	edit:string;
	lang:string;
	pages:string;
	description:string;
	ejemplares:string;
	stock:number;
	available:number;

}
