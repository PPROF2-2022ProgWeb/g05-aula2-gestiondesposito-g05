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
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
