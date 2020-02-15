import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
<br>
    <app-ng-style></app-ng-style>

    <br>
    <app-css></app-css>
    <p>Hola mundo desde app.component</p>

    <br>
    <app-clases></app-clases>

    <p [appResaltado]="'#b8daff'">
        Hola mundo
    </p>

    <app-ng-switch></app-ng-switch>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
