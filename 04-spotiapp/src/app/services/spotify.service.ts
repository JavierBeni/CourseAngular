import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCx1nGo-2FSp5rcNHftclWtm9b1u4Us7qqxkTQ9pOLKA94i2JPAxMOEH71IPBict3l_cMil7psFGAWomSs'
    });

    return this.http.get(url, { headers });
  }

  getNewRealease() {

    return this.getQuery('browse/new-releases')
      .pipe(map(data => data['albums'].items));
  }

  getArtistas(termino: string) {

    return this.getQuery(`search?q=${termino}&type=artist`)
      .pipe(map(data => data['artists'].items));
  }

  getArtista(id: string) {
    return this.getQuery(`artists/${id}`);
  }
  getTopTracks(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?country=us`)
      .pipe(map(data => data['tracks']));
  }

}
