import { Component} from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent  {

artistas: any[] = [];

  constructor(private spotify: SpotifyService) { }

buscar(termino:string){
console.log(termino);
this.spotify.getArtistas(termino)
.subscribe((data:any) =>{
  this.artistas = data;
});
};
}
