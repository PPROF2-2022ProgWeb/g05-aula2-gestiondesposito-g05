import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DevlibComponent } from './shared/components/devlib/devlib.component';
import { LibrosComponent } from './shared/components/libros/libros.component';
import { ListlibrosComponent } from './shared/components/listlibros/listlibros.component';
import { ListusuariosComponent } from './shared/components/listusuarios/listusuarios.component';
import { NuepreComponent } from './shared/components/nuepre/nuepre.component';
import { ReportesComponent } from './shared/components/reportes/reportes.component';
import { UsuariosComponent } from './shared/components/usuarios/usuarios.component';
import { BodyComponent } from './shared/components/body/body.component';
import { ErrorComponent } from './shared/components/error/error.component';
import { ActualizarLibroComponent } from './shared/components/actualizar-libro/actualizar-libro.component';
import { ActualizarUsuarioComponent } from './shared/components/actualizar-usuario/actualizar-usuario.component';
import { ActualizarPrestamoComponent } from './shared/components/actualizar-prestamo/actualizar-prestamo.component';
import { PrestamoDetalleComponent } from './shared/components/prestamo-detalle/prestamo-detalle.component';
import { LibroDetalleComponent } from './shared/components/libro-detalle/libro-detalle.component';
import { UsuarioDetalleComponent } from './shared/components/usuario-detalle/usuario-detalle.component';
const routes: Routes = [
  {path: '', redirectTo:'/inicio',pathMatch:'full'},

  {path: 'inicio', component: BodyComponent},
  {path: 'devolucion', component: DevlibComponent},
  {path: 'libros', component: LibrosComponent},
  {path: 'listaLibros', component: ListlibrosComponent},
  {path: 'listaUsuarios', component: ListusuariosComponent},
  {path: 'nuevoPrestamo', component: NuepreComponent},
  {path: 'reportes', component: ReportesComponent},
  {path: 'usuarios', component: UsuariosComponent},
  {path: 'actualizar-libro/:id', component: ActualizarLibroComponent},
  {path: 'actualizar-prestamo/:id', component: ActualizarPrestamoComponent },
  {path: 'actualizar-usuario/:id', component: ActualizarUsuarioComponent },
  {path: 'actualizar-usuario', component: ActualizarUsuarioComponent },
  {path: 'detalle-prestamo/:id', component: PrestamoDetalleComponent },
  {path: 'detalle-libro/:id', component: LibroDetalleComponent },
  {path: 'detalle-usuario/:id', component: UsuarioDetalleComponent },
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
