import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PangramasolucionComponent } from './pangramasolucion/pangramasolucion.component';
import { BotonComponent } from './boton/boton.component';

@NgModule({
  declarations: [
    AppComponent,
    PangramasolucionComponent,
    BotonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
