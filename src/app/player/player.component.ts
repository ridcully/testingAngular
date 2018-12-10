import { Component, OnInit } from '@angular/core';

import {SearchResultsService} from '../searchResults.service';
import {Track} from '../track.model';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  public Track: Track;
  public Selected: number;
  public Total: number = 0;

  constructor(private tracks: SearchResultsService) {
    // set local variable references
    this.Track = this.tracks.Tracks[this.tracks.Selected];
    this.Selected = this.tracks.Selected;
    this.Total = this.tracks.Tracks.length;
  }

  ngOnInit() {
  }

  previousSong() {
    // check if we have a previous title
    if (this.tracks.Selected > 0) {
      this.tracks.Selected--;
    }

    // update local variables
    this.Selected = this.tracks.Selected;
    this.Track = this.tracks.Tracks[this.tracks.Selected];
  }

  nextSong() {
    // check if we have a next title
    if (this.tracks.Selected < this.tracks.Tracks.length) {
      this.tracks.Selected++;
    }

    // update local variables
    this.Selected = this.tracks.Selected;
    this.Track = this.tracks.Tracks[this.tracks.Selected];
  }
}
