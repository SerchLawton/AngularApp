import { Component } from '@angular/core';

@Component({    //Decorador
  selector: 'app-raiz', //Nombre del selector
  templateUrl: './app.component.html', //Plantilla
  styleUrls: ['./app.component.css'] //Archivo estilos CSS
})
export class AppComponent { //Clase
  title = 'App Prueba';
  saludo = 'Hola Alumnos de angular'; //Agrego una propiedad al componente
}
