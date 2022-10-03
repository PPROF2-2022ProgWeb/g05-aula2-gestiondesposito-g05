import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NuepreComponent } from './shared/components/nuepre/nuepre.component';
import { DevlibComponent } from './shared/components/devlib/devlib.component';
import { UsuariosComponent } from './shared/components/usuarios/usuarios.component';
import { ListusuariosComponent } from './shared/components/listusuarios/listusuarios.component';
import { ListlibrosComponent } from './shared/components/listlibros/listlibros.component';
import { LibrosComponent } from './shared/components/libros/libros.component';
import { ReportesComponent } from './shared/components/reportes/reportes.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { BodyComponent } from './shared/components/body/body.component';
import { ErrorComponent } from './shared/components/error/error.component';
import { FormsModule } from '@angular/forms';
import { ActualizarLibroComponent } from './shared/components/actualizar-libro/actualizar-libro.component';
import { ActualizarUsuarioComponent } from './shared/components/actualizar-usuario/actualizar-usuario.component';
import { LibroDetalleComponent } from './shared/components/libro-detalle/libro-detalle.component';
import { UsuarioDetalleComponent } from './shared/components/usuario-detalle/usuario-detalle.component';
import { PrestamoDetalleComponent } from './shared/components/prestamo-detalle/prestamo-detalle.component';
import { ActualizarPrestamoComponent } from './shared/components/actualizar-prestamo/actualizar-prestamo.component';

@NgModule({
  declarations: [
    AppComponent,
    NuepreComponent,
    DevlibComponent,
    UsuariosComponent,
    ListusuariosComponent,
    ListlibrosComponent,
    LibrosComponent,
    ReportesComponent,
    FooterComponent,
    HeaderComponent,
    BodyComponent,
    ErrorComponent,
    ActualizarLibroComponent,
    ActualizarUsuarioComponent,
    LibroDetalleComponent,
    UsuarioDetalleComponent,
    PrestamoDetalleComponent,
    ActualizarPrestamoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
