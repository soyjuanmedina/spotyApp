import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artists: any[] = [];
  artist: any[] = [];
  urlSpotify: string = 'https://api.spotify.com/v1';
  token: string = 'BQBJPiCpr7lRkkF_8UZi9c7F8rrXI0sYN9En0uSr6GCv9KUCSYF5z5UFKzPs-sfutrswh-XwtZIsOBmTR9yZyNd6bKaMvv5ThxZ11HTMg-Jg2clrjhQ3fcjigjwnfNVM-52Bkaxb2InKdQ';

  constructor(public httpClient: HttpClient) {
   }

   getHeaders(): HttpHeaders{
    let headers = new HttpHeaders({
      'authorization': `Bearer ${this.token}`
    })
    return headers;
   }
   
   getArtists(term: string) {
    let url = `${this.urlSpotify}/search?query=${term}&type=artist&market=ES&limit=20`
    let headers = this.getHeaders();

    return this.httpClient.get(url, { headers })
        .map ( (resp: any) =>{
          this.artists = resp.artists.items;
          return this.artists;
   });

  }

  getArtist(id: string) {
    let url = `${this.urlSpotify}/artists/${id}`
    let headers = this.getHeaders();

    return this.httpClient.get(url, { headers });

  }

  getTop(id: string) {
    let url = `${this.urlSpotify}/artists/${id}/top-tracks?country=ES`
    let headers = this.getHeaders();

    return this.httpClient.get(url, { headers })
      .map( response => response.tracks)
    ;

  }
}