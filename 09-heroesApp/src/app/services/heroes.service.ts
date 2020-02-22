import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HeroeModel } from '../models/heroe.model';
import { map, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private url = 'https://login-app-4e884.firebaseio.com';


  constructor(private http: HttpClient) { }

  crearHeroe(heroe: HeroeModel){

    //direccion a donde se envian los datos y el cuerpo de la información, ademas de manipular el ID con el map
    return this.http.post(`${this.url}/heroes.json`, heroe )
    .pipe(map((resp: any) => {
    heroe.id = resp.name;
    return heroe;
      })
    );
  }

  actualizarHeroe(heroe:HeroeModel){

    const heroeTemp={
    //toma cada propiedad del heroe
      ...heroe
    };
    delete heroeTemp.id;

    //direccion a donde se envian los datos, el id del heroe a modificar y el cuerpo de la información
    return this.http.put(`${this.url}/heroes/${heroe.id}.json`, heroeTemp);

  }

  borrarHeroe(id:string){
  return this.http.delete(`${this.url}/heroes/${id}.json`);
  }

  getHeroe(id: string) {
    return this.http.get(`${this.url}/heroes/${id}.json`);
  }

  getHeroes() {
    return this.http.get(`${this.url}/heroes.json`).pipe(
      map( this.crearArreglo ),
      delay(1000)
    );
  }

  private crearArreglo(heroesObj: object){

   const heroes: HeroeModel[] = [];
  //validar si no hay datos
   if (heroesObj === null) {return []; }
  
   Object.keys(heroesObj).forEach(key => {
     const heroe: HeroeModel = heroesObj[key];
     heroe.id = key;
     heroes.push(heroe);
   });
  return heroes;

  }

}
