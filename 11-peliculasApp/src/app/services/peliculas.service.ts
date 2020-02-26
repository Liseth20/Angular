import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private apikey: string = "bf21ddb4ed2bf490b04e41eb69031232";
  private urlMoviedb: string = "https://api.themoviedb.org/3";
  peliculas:any[]=[];

  constructor(private http: HttpClient) { }


getCartelera(){
  let desde: Date = new Date();
  let hasta: Date = new Date();
  hasta.setDate(hasta.getDate()+7)
  
  let desdeStr = [desde.getFullYear(), desde.getMonth()+1 < 10 ? (desde.getMonth()+1).toString().padStart(2,"0") : desde.getMonth()+1, desde.getDate() < 10 ? (desde.getDate()).toString().padStart(2,"0") : desde.getDate()].join("-");
  let hastaStr = [hasta.getFullYear(), hasta.getMonth()+1 < 10 ? (hasta.getMonth()+1).toString().padStart(2,"0") : hasta.getMonth()+1, hasta.getDate() < 10 ? (hasta.getDate()).toString().padStart(2,"0") : desde.getDate()].join("-");
  
  let url = `${this.urlMoviedb}/discover/movie?primary_release_date.gte=${desdeStr}&primary_release_date.lte=${hastaStr}&api_key=${this.apikey}&language=es`;
  return this.http.get(url)
  .pipe(
    map( data => {
      return data['results'];
    })
  );
}
  getPopulares(){
    let url = `${this.urlMoviedb}/discover/movie?sort_by=popularity.desc&api_key=${this.apikey}&language=es`;
    return this.http.get(url)
    .pipe(map((resp: any) => resp.results));
  }

  getPopularesYear(){
    let url = `${this.urlMoviedb}/discover/movie?primary_release_year=2020&sort_by=vote_average.desc&api_key=${this.apikey}&language=es`;
    return this.http.get(url)
    .pipe(map((resp: any) => resp.results));
  }

  buscarPelicula(texto:string){
    let url = `${this.urlMoviedb}/search/movie?query=${texto}&sort_by=popularity.desc&api_key=${this.apikey}&language=es`;
    
    return this.http.get(url)
    .pipe(map((resp: any) => {
      this.peliculas= resp.results
     return resp.results
    }));
  }

  
  getPelicula(id:string){
    let url = `${this.urlMoviedb}/movie/${id}?api_key=${this.apikey}&language=es`;
    return this.http.get(url)
    .pipe(map((resp: any) => resp));
  }



}
