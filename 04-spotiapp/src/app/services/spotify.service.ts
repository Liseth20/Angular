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
    'Authorization': 'Bearer BQBITadPxMsNh-_vdzZ7fvyfeXoQYq7kQpFEtTxuLt5_8wlnzcrVdBE1yGnopEU9Zc6rid3vJobHSogfkhs'
   });
   return this.http.get(url,{headers});
}

   //traer la ultima informacion de spotify

getNewReleases(){

return this.getQuery('browse/new-releases').pipe( map( data => data['albums'].items));

}

getArtista(termino:string){

 return this.getQuery(`search?q=${termino}&type=artist&limit=15`).pipe( map( data => data['artists'].items));
}

}
