import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {

  termino: string = '';

  constructor( public _spotifyService: SpotifyService) {
  }

  buscarArtista(){
    this._spotifyService.getArtistas(this.termino).subscribe(response =>{
      console.log(response);
    });
  }
}
