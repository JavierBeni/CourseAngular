import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {HeroesService} from '../../services/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {

  heroes:any[] = [];
  termino:string;

  constructor(private activatedRoute:ActivatedRoute, private _heroesServices:HeroesService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params =>{
      this.termino= params['termino'];
      this.heroes = this._heroesServices.buscarHeroes(params['termino']);
      // console.log(this.heroes);
    })
  }

}
