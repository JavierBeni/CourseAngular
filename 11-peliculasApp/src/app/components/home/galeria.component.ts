import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styles: []
})
export class GaleriaComponent implements OnInit {

  @Input('peliculas')peliculas;
  @Input('titulo')titulo;
  @Input('populares')populares;
  @Input('popularesNinos')popularesNinos;

  constructor() { }

  ngOnInit() {
  }

}
