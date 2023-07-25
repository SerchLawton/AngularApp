import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent, EmpleadosComponent, EmpleadoComponent //Agregar componente
  ],
  imports: [
    BrowserModule, FormsModule //Para directiva
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
