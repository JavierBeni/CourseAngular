import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HeroesService } from '../../services/heroes.service';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {

  heroe: any = {};

  casa:string = "marvel";

  constructor(private activatedRouter: ActivatedRoute, private _heroesService: HeroesService) {
    this.activatedRouter.params.subscribe(params => {
      this.heroe = this._heroesService.getHeroe(params['id']);
    })
  }

  ngOnInit() {
  }

}
