import { Component, OnInit } from '@angular/core';

import {SearchHttpService} from './searchHttp.service';

@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.css'],

  providers: [SearchHttpService]
})
export class SearchboxComponent implements OnInit {

  constructor(private shs: SearchHttpService) { }

  ngOnInit() {
  }

  doSearch(searchTem: HTMLInputElement) {
    // call the search service
    this.shs.search(searchTem.value);
  }
}
