import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { Cuerpo1Component } from './shared/components/cuerpo1/cuerpo1.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { TiendaComponent } from './shared/components/tienda/tienda.component';
import { PresupuestoComponent } from './shared/components/presupuesto/presupuesto.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Cuerpo1Component,
    FooterComponent,
    TiendaComponent,
    PresupuestoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
