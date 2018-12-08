import { Component, OnInit } from '@angular/core';

import {SearchResultsService} from '../searchResults.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  constructor(public Tracks: SearchResultsService) { }

  ngOnInit() {
  }

  previousSong() {
    if (this.Tracks.Selected > 0) {
      this.Tracks.Selected--;
    }
  }

  nextSong() {
    if (this.Tracks.Selected < this.Tracks.Tracks.length) {
      this.Tracks.Selected++;
    }
  }
}
