import { Component } from '@angular/core';
import { promise } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nombre:string = "Javier";
  nombreL:string = "FranciscO JavieR BenitO BarahonA";
  array = [1,2,3,4,5,6,7,8,9,10];

  PI = Math.PI;

  porcentaje = 0.265

  salario = 1234.5;

  heroe = {
    nombre: "Peter Parker",
    alias: "Spiderman",
    edad: 16,
    direccion:{
      calle: "tela",
      casa: 90
    }
  }

  valorDePromesa = new Promise((resolve, reject)=>{
    setTimeout(() => resolve("llego el dato!"), 3500);
  })

  fecha = new Date();

  video = "tlH1YhJk-oQ";

  activar:boolean = true;
}
