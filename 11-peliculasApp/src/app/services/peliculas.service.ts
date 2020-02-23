import { Injectable } from '@angular/core';

//importación de http, Jsonp, Map
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private apikey: string = "03af7aa52f65428227e555965024ad92";
  private urlMoviedb: string = "https://api.themoviedb.org/3/";

  peliculas: any[] = [];

  constructor(private http: HttpClient) { }


  getCartelera() {

    let desde = new Date();
    let hasta = new Date();
    hasta.setDate(hasta.getDate() + 7);

    let desdeStr = desde.toISOString().substring(0, 10);
    let hastaStr = hasta.toISOString().substring(0, 10);

    let url = `${this.urlMoviedb}discover/movie?primary_release_date.gte=${desdeStr}&primary_release_date.lte=${hastaStr}&api_key=${this.apikey}&language=es`;
    return this.http.get(url)
      .pipe(map((res: any) => res.results));
  }


  getPopulares() {

    let url = `${this.urlMoviedb}discover/movie?sort_by=popularity.desc&api_key=${this.apikey}&language=es`;

    return this.http.get(url)
      .pipe(map((res: any) => res.results));
  }

  getPopularesNinos() {

    let url = `${this.urlMoviedb}discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${this.apikey}&language=es`;

    return this.http.get(url)
      .pipe(map((res: any) => res.results));
  }

  buscarPelicula(texto: string) {

    let url = `${this.urlMoviedb}search/movie?query=${texto}&sort_by=popularity.desc&api_key=${this.apikey}&language=es`;

    return this.http.get(url)
      .pipe(map((res: any) => {
        this.peliculas = res.results;
        return res.results;
      }));
  }

  getPelicula(id: string) {
    let url = `${this.urlMoviedb}movie/${id}?api_key=${this.apikey}&language=es`;

    return this.http.get(url)
      .pipe(map((res: any) => res));

  }
}