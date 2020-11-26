import { Component } from '@angular/core';
import { CargarScriptsService } from "./cargar-scripts.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor( private _CargarScripts:CargarScriptsService){
    _CargarScripts.Cargar(["JsAnimado"]);
    _CargarScripts.Cargar(["JsMenu"]);
    _CargarScripts.Cargar(["JsSubir"]);
  }
  title = 'RestauranteFF';
}
