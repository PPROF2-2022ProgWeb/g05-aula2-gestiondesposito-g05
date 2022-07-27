import { CarritoComponent } from './shared/components/carrito/carrito.component';
import { PagenotfoundComponent } from './shared/components/pagenotfound/pagenotfound.component';
import { ContactoComponent } from './shared/components/contacto/contacto.component';
import { AccesoComponent } from './shared/components/acceso/acceso.component';
import { AbmComponent } from './shared/components/abm/abm.component';
import { TiendaComponent } from './shared/components/tienda/tienda.component';
import { Cuerpo1Component } from './shared/components/cuerpo1/cuerpo1.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Definimos las rutas de navegacion
const routes: Routes = [
  {path: '', redirectTo:'/inicio',pathMatch:'full'},
  {path: 'inicio', component: Cuerpo1Component},
  {path: 'tienda', component: TiendaComponent},
  {path: 'abm', component: AbmComponent},
  {path: 'acceso', component: AccesoComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'carrito', component: CarritoComponent},
  {path: '**', component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
