import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { Cuerpo1Component } from './shared/components/cuerpo1/cuerpo1.component';
import { FooterComponent } from './shared/components/footer/footer.component';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TiendaComponent } from './shared/components/tienda/tienda.component';
import { PagenotfoundComponent } from './shared/components/pagenotfound/pagenotfound.component';
import { AbmComponent } from './shared/components/abm/abm.component';
import { AccesoComponent } from './shared/components/acceso/acceso.component';
import { ContactoComponent } from './shared/components/contacto/contacto.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarritoComponent } from './shared/components/carrito/carrito.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Cuerpo1Component,
    FooterComponent,
    TiendaComponent,
    PagenotfoundComponent,
    AbmComponent,
    AccesoComponent,
    ContactoComponent,
    CarritoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    }),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

//AOT Sopoerte de compilacion

export function httpTranslateLoader(http:HttpClient) {
  return new TranslateHttpLoader(http);

}
