import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';


@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent {

  artista: any = {};
  topTracks:any[]=[];
  loadingArtist: boolean;

  constructor(private router: ActivatedRoute,
    private spotify: SpotifyService) {

    this.loadingArtist = true;

    this.router.params.subscribe(params => {
      this.getArtista(params['id']);
      this.getTopTracks(params['id']);
    });
  }

  getArtista(id: string) {
    this.loadingArtist = true;

    this.spotify.getArtista(id)
      .subscribe(artista => {
        this.artista = artista;
        this.loadingArtist = false;
      });
  }

  getTopTracks(id: string) {
    this.spotify.getTopTracks(id)
      .subscribe(topTracks => {
        console.log(topTracks);
        this.topTracks = topTracks;
      });
  }

}
