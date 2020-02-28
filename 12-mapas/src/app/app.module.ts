import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MateriaModule } from './materia.module';
import { MapaComponent } from './components/mapa/mapa.component';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    MapaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MateriaModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAWuvh5AryApvA_ncM43F7TG3yO9ucLCw0'
    })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
