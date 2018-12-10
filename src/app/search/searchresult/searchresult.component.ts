import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import {SearchResultsService} from '../../searchResults.service';

@Component({
  selector: 'app-searchresult',
  templateUrl: './searchresult.component.html',
  styleUrls: ['./searchresult.component.css']
})
export class SearchresultComponent implements OnInit {

  constructor(public Tracks: SearchResultsService, private router: Router) { }

  ngOnInit() {
  }

  showPlayer(idx: number) {
    // redirect to player component.
    this.Tracks.Selected = idx;
    this.router.navigate(['/player']);
  }
}
