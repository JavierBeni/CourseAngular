import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';

@Injectable({
  providedIn: 'root'
})
export class DeseosService {

  listas: Lista[] = [];

  constructor() {

    this.cargarStoreage();

  }

  crearLista(titulo: string) {
    const nuevaLista = new Lista(titulo);
    this.listas.push(nuevaLista);
    this.guardarStorage();
    return nuevaLista.id;
  }

  borrarLista(lista: Lista) {
    this.listas = this.listas.filter(listaData => listaData.id !== lista.id)
    this.guardarStorage();
  }

  obtenerLista(id: string | number) {
    id = Number(id);

    return this.listas.find(listaData => listaData.id === id);
  }

  guardarStorage() {
    localStorage.setItem('data', JSON.stringify(this.listas));
  }

  cargarStoreage() {
    if (localStorage.getItem('data')) {
      this.listas = JSON.parse(localStorage.getItem('data'));
    } else {
      this.listas = [];
    }

  }
}
