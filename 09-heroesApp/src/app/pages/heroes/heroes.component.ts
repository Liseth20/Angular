import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { HeroeModel } from '../../models/heroe.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes: HeroeModel[] = [];
  cargando = false;

  constructor(private heroesService: HeroesService) { }

  ngOnInit() {

  this.cargando = true;
  this.heroesService.getHeroes()
  .subscribe(resp => {
    this.heroes = resp;
    this.cargando = false;
});
  }

  borrarHeroe(heroe: HeroeModel, i: number){

    Swal.fire({
      title: 'Are yo sure?',
      text: `Are you sure to delete the hero ${heroe.nombre} `,
      icon: 'question',
      showConfirmButton: true,
      showCancelButton: true
    }).then(resp =>{
    if(resp.value){

      this.heroes.splice( i , 1 );
      this.heroesService.borrarHeroe(heroe.id).subscribe();

    }
    });

  
  }

}
