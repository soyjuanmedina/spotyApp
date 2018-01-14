import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artistas: any[] = [];

  constructor(public httpClient: HttpClient) {
   }

   getArtistas(termino: string) {
    let url = `https://api.spotify.com/v1/search?query=${termino}&type=artist&market=ES&limit=20`
    let headers = new HttpHeaders({
      'authorization': 'Bearer BQCdLfVncajvTWSg5gAJ09GymGZoVtxud9WBsKmDW-Ch8X7HmzzTYJRhQ1tLp6RGeLFllhvv3XZsdvt_wqA' 
    });

    return this.httpClient.get(url, { headers })
        .map ( (resp: any) =>{
          this.artistas = resp.artists.items;
          return this.artistas;
   });

}
}