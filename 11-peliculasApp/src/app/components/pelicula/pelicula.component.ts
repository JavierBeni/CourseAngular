import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from '../../services/peliculas.service';


@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styles: []
})
export class PeliculaComponent implements OnInit {

  pelicula: any;
  regresarA:string = "";
  busqueda:string = "";


  constructor(public _ps: PeliculasService, public route: ActivatedRoute) {
    
    route.params.subscribe(resp => {

      this.regresarA = resp['pag'];
      if (resp['busqueda']) { this.busqueda = resp['busqueda']; }
      
      this._ps.getPelicula(resp['id']).subscribe(peli => this.pelicula = peli);

    })
  }

  ngOnInit() {
  }

}
