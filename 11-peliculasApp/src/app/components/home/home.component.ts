import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  cartelera: any;
  populares: any;
  popularesNinos: any;

  constructor(public _ps: PeliculasService) {
    this._ps.getCartelera().subscribe(resp => this.cartelera = resp);
    this._ps.getPopulares().subscribe(resp => this.populares = resp);
    this._ps.getPopularesNinos().subscribe(resp => this.popularesNinos = resp);
  }

  ngOnInit() {
  }

}
