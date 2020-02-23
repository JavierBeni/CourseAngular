import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: []
})
export class BuscarComponent implements OnInit {

  buscar: string = "";

  constructor(public _ps: PeliculasService, public route: ActivatedRoute) {
    route.params.subscribe(resp => {
      if (resp['texto']) {
        this.buscar = resp['texto'];
        this.buscarPelicula();
      }
    })
  }

  ngOnInit() {
  }

  buscarPelicula() {
    if (this.buscar.length == 0) {
      return;
    }
    this._ps.buscarPelicula(this.buscar).subscribe()
  }

}
