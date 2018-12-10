import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import {SearchResultsService} from '../../searchResults.service';

@Component({
  selector: 'app-searchresult',
  templateUrl: './searchresult.component.html',
  styleUrls: ['./searchresult.component.css']
})
export class SearchresultComponent implements OnInit {
  public SortType = 'name';
  public SortDir  = 'asc';

  constructor(public Tracks: SearchResultsService, private router: Router) { }

  ngOnInit() {
  }

  showPlayer(idx: number) {
    // redirect to player component.
    this.Tracks.Selected = idx;
    this.router.navigate(['/player']);
  }

  sortPrice() {
    if (this.SortType === 'price') {
      if (this.SortDir === 'asc') {
        this.SortDir = 'desc';
      } else {
        this.SortDir = 'asc';
      }
    } else {
      this.SortDir = 'asc';
      this.SortType = 'price';
    }
  }

  sortGenre() {
    if (this.SortType === 'genre') {
      if (this.SortDir === 'asc') {
        this.SortDir = 'desc';
      } else {
        this.SortDir = 'asc';
      }
    } else {
      this.SortDir = 'asc';
      this.SortType = 'genre';
    }
  }

  sortLength() {
    if (this.SortType === 'length') {
      if (this.SortDir === 'asc') {
        this.SortDir = 'desc';
      } else {
        this.SortDir = 'asc';
      }
    } else {
      this.SortDir = 'asc';
      this.SortType = 'length';
    }
  }

  sortName() {
    if (this.SortType === 'name') {
      if (this.SortDir === 'asc') {
        this.SortDir = 'desc';
      } else {
        this.SortDir = 'asc';
      }
    } else {
      this.SortDir = 'asc';
      this.SortType = 'name';
    }
  }
}
