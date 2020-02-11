import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
   }

   //codigo unico para los dos metodos
getQuery(query:string){
  const url = `https://api.spotify.com/v1/${ query }`;
  const headers = new HttpHeaders({
    'Authorization': 'Bearer BQBrn0_a3MaSWCq-90Xt-hO5QlZIhxGBsU1FSfqvJTE3IfCyRwadQUONJ3rlsjfz1ogBeHaXYIdiePG3FBQ'
   });
   return this.http.get(url,{headers});
}

   //traer la ultima informacion de spotify

getNewReleases(){

return this.getQuery('browse/new-releases').pipe( map( data => data['albums'].items));

}

getArtistas(termino: string) {

 return this.getQuery(`search?q=${termino}&type=artist&limit=15`).pipe( map( data => data['artists'].items));
}

getArtista(id: string) {

  return this.getQuery(`artists/${id}`);//.pipe( map( data => data['artists'].items));
 }

 getTopTracks(id: string) {

  return this.getQuery(`artists/${id}/top-tracks?country=us`).pipe( map( data => data['tracks']));
 }

}
