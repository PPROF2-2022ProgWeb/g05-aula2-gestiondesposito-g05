import { UsuarioClass } from './usuario-class';
import { LibroClass } from './libro-class';

export class PrestamoClass {
id:number;
libro:LibroClass;
usuario:UsuarioClass;
fechaSalida:Date;
fechaEntrega:Date;
estado:number;
}
