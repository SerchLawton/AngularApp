import { style } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  /*Plantilla en linea
    template: `
    <p>Aqui va un empleado</p>
  `,
  */
  styleUrls: ['./empleado.component.css']
  /*
  Estilos en linea
  styles: [
      "p{background-color:red;}"
  ]*/
})
export class EmpleadoComponent {
  nombre="Sergio";
  private apellido="Tinoco" //Atributo privado
  edad=20
  
  //Propiedades del binding
  cuadroHabilitado=false
  usuRegistrado=false
  empresa="Google"  //Propiedad del binding bidireccional

  getApellido(){
    return this.apellido
  }

  registrarUsuario(evento:Event){
    if((<HTMLInputElement>evento.target).value=="Si")
    {
      alert("El usuario se ha registrado")
      this.usuRegistrado=true
    }
    else{
      this.usuRegistrado=false
    }
  }
}
