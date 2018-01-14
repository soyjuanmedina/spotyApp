import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {

  term: string = '';

  constructor( public _spotifyService: SpotifyService) {
  }

  searchArtist(){
    this._spotifyService.getArtists(this.term).subscribe(response =>{
      console.log(response);
    });
  }
}
