import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: []
})
export class TemplateComponent implements OnInit {

usuario = {
  nombre:null,
  apellido: null,
  email: null,
  pais: ""
}
paises= [{
codigo: "CRI",
nombre: "Costa Rica"
},
{
  codigo: "Esp",
 nombre: "España"
}]
  constructor() { }

  ngOnInit() {
  }

  guardar(forma: NgForm){

    console.log( 'ngForm:', forma);
    console.log( 'Valor forma', forma.value);
    console.log( 'Usuario', this.usuario);
  }
}
