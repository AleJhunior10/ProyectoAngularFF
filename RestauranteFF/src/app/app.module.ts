import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/*JS*/
import { CargarScriptsService } from "./cargar-scripts.service";

/* Componentes */

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/* Servicios */

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    CargarScriptsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
