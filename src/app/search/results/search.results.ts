import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-results',
  templateUrl: './search.results.html',
  styleUrls: ['./search.results.scss']
})
export class SearchResults implements OnInit {
  //flag when search delivers no records
  noResults=false;
  //flag during the query
  waitingForResults=false;

  constructor() { }

  ngOnInit() {
    
  }

}
