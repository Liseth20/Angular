import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nombre = "Liseth";

  arreglo = [1,2,3,4,5,6,7,8,9,10];

  PI = Math.PI;

  porcent = 0.234;

 salario  = 1234.5;

 heroe = {
   nombre: "Logan ",
  clave: "Wolverine",
  edad: 500,
  direccion: {
    calle: "Primera",
    casa: "19"
  }
 };

 valorDePromesa = new Promise( (resolve,reject)=>{
setTimeout(()=>resolve('Llego la data!'),3500)
 });

 fecha = new Date();

 nombre2 = "darIan liSetH baRquero paNiagUa";

video = "oiJwPNPm6wk";

activar:boolean = true;
 
}
