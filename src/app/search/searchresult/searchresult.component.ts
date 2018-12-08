import { Component, OnInit } from '@angular/core';

import {SearchResultsService} from '../../searchResults.service';

@Component({
  selector: 'app-searchresult',
  templateUrl: './searchresult.component.html',
  styleUrls: ['./searchresult.component.css']
})
export class SearchresultComponent implements OnInit {

  constructor(public Tracks: SearchResultsService) { }

  ngOnInit() {
  }

  showPlayer(idx: number) {
    console.log('Show Log: ' + idx.toString());
  }
}
