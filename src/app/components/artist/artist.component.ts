import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent implements OnInit {

  artist: any = [];
  tracks: any = [];

  constructor( private activatedRoute: ActivatedRoute,
                public _spotifyService: SpotifyService) {
    console.log(activatedRoute.params);
  }

  ngOnInit() {
    this.activatedRoute.params
        .map(params => params['id'])
        .subscribe ( id => {
            console.log(id);
            this._spotifyService.getArtist(id)
              .subscribe( artist => {
                  this.artist = artist;
                  console.log(artist);
                });
            this._spotifyService.getTop(id)
              .subscribe( tracks => {
                  this.tracks = tracks;
                console.log(tracks);
                });
    });
  }

}
