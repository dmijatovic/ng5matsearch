//Angular
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//RxJs
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class SearchService{
  constructor(
    private http:HttpClient
  ){
    console.log("search service...","started");
  }
  /**
   * Get list of possible segments to be used in search filter
   * (hypothetical example here)
   */
  getSegments(){
    return new Observable((observer)=>{
      //send array of values
      observer.next(
        [
          {id:'seg1', label:'segment 1'},
          {id:'seg2', label:'segment 2'},
          {id:'seg3', label:'segment 3'},
          {id:'seg4', label:'segment 4'}
        ]
      );
      //observer.error("");
      //send complete state
      observer.complete();
    });
  }
  getProducts(){
    return new Observable((observer)=>{
      //send array of values
      observer.next(
        [
          {id:'prod1', label:'Product 1'},
          {id:'prod2', label:'Product 2'},
          {id:'prod3', label:'Product 3'},
          {id:'prod4', label:'Product 4'}
        ]
      );
      //send complete state
      observer.complete();
    });
  }
  getTypes(){
    return new Observable((observer)=>{
      //send array of values
      observer.next(
        [
          {id:'type1', label:'Type 1', checked:false},
          {id:'type2', label:'Type 2', checked:false},
          {id:'type3', label:'Type 3', checked:false},
          {id:'type4', label:'Type 4', checked:false}
        ]
      );
      //send complete state
      observer.complete();
    });
  }
//-------------------------------------------
// Here we publish search term and filter changes
//-------------------------------------------
  searchQuery={
    searchFor: null,
    filter:{
      segments:null,
      products:null,
      types:null
    }
  }
  search = new BehaviorSubject<any>(this.searchQuery);
  searchQuery$ = this.search.asObservable();
  setSearchQuery(sq){
    //create new object
    //and spread values
    this.searchQuery = {
      ...sq
    }
    //publish new searchQuery
    this.search.next(sq);
  }
  setSearchFor(d){
    let sq={
      ...this.searchQuery,
      searchFor: d
    }
    this.searchQuery = sq;
    this.search.next(sq);
  }
  setSearchFilter(d){
    let sq={
      ...this.searchQuery,
      d
    }
    this.searchQuery = sq;
    this.search.next(sq);
  }
}
