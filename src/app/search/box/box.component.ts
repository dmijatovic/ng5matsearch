import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss']
})
export class SearchBox implements OnInit {
  searchValue = 'Clear me';
  constructor() { }

  ngOnInit() {
  }

  searchTerm($event){
    
    console.log("search for...", this.searchValue);

     
  }

}
