import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artists: any[] = [];
  artist: any[] = [];
  urlSpotify: string = 'https://api.spotify.com/v1';
  token: string = 'BQAJ-iNs6Zp4jh1eO3D_y0Kua6JISN6ssKYibkfNpF_l9sOSoylvKxMPKua_3jTGoK_h3aEv_kP8vb4Bi39qKSKksuaOXgVKPsimlzaVNumJ8NHdoEH5SZI_SaOcdwX2mdrZDsqDoUPzcA';

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
}