import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-page',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
  host:{
    'class':'app-body'
  }
})
export class SearchPage implements OnInit {

  constructor() {
    //console.log("search page")
  }

  ngOnInit() {
  }

  searchFor($event){
    console.log("search request received...",$event);
  }

}
