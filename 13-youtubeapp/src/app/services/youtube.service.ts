import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  private youtubeUrl: string = "https://www.googleapis.com/youtube/v3/playlistItems";
  private apikey: string = "AIzaSyDC1tMBs1F_x1JMDUYmRS0UH3HhkGGrez8";
  private playlist: string = "UUcrSw79VCd4sSguy9D2HufQ";
  private nextPageToken: string = "";//"CAoQAA"

  constructor(public httpClient: HttpClient) { }

  getVideos() {

    let parametros = new HttpParams()
      .set('part', 'snippet')
      .set('playlistId', this.playlist)
      .set('maxResults', '10')
      .set('key', this.apikey);

    if (this.nextPageToken) {
      parametros = parametros.set('pageToken', this.nextPageToken)
    }

    return this.httpClient.get(this.youtubeUrl, { params: parametros }).pipe(map((resp: any) => {
      this.nextPageToken = resp.nextPageToken;

      let videos: any[] = [];
      for (let video of resp.items) {
        let snippet = video.snippet;
        videos.push(snippet);
      }
      return videos;
    }));

  }
}
