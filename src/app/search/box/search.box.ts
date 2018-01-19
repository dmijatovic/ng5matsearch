//Angular
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

//To import the entire core set of functionality
//see https://www.npmjs.com/package/rxjs
//import 'rxjs/Rx';
//To import only what you need
import { Subject } from 'rxjs/Subject';
//operators are added this way
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

//search service
import { SearchService } from '../search.svc';

@Component({
  selector: 'app-search-box',
  templateUrl: './search.box.html',
  styleUrls: ['./search.box.scss']
})
export class SearchBox implements OnInit {
  //current search value is stored here
  searchValue = '';
  filterVisible = false;
  productIn = '';
  segmentIn = ''
  //we emit search value to parent
  @Output() search = new EventEmitter();
  //listen to user typing search term
  term$ = new Subject<any>();
  //segments loaded in filter
  segments:any=[];
  products:any=[];
  types:any=[];
  constructor(
    private searchSvc:SearchService
  ){
    //debugger
    //console.log("searchbox");
  }
  /**
   * Subscribe to term stream
   */
  ngOnInit() {
    //console.log("searchbox");
    //get filter options

    //bug in getSegments but I cannot find it 'quckly'!
    //this.getSegments();

    this.getProducts();
    this.getTypes();

    //hook search button
    this.listenForSearchTerm();
  }
  /* listen to what client types */
  listenForSearchTerm(){
    this.term$
    .debounceTime(500)
    .distinctUntilChanged()
    .subscribe(
      (find)=>{
        //debugger
        //if you want to trigger only on enter
        //if ([13, 40, 38].includes(find.keyCode)) {
        this.search.emit(find.target.value);
        //}
        //console.log("Emit search request:", find);
      },
      (e)=>console.error(e)
    );
  }
  getSegments(){
    this.searchSvc.getSegments()
    .subscribe((d)=>{
      debugger
      this.segments = d;
    });
  }
  getProducts(){
    this.searchSvc.getProducts()
    .subscribe((d)=>{
      //debugger
      this.products = d;
    });
  }
  getTypes(){
    this.searchSvc.getTypes()
    .subscribe((d)=>{
      //debugger
      this.types = d;
    });
  }
  showFilter(){
    console.log("show filter");
    this.filterVisible = !this.filterVisible;
  }
  startSearch(){
    let types = [];
    this.types.map((i)=>{
      if (i.checked===true){
        types.push(i.id);
      }
    });

    let search={
      string: this.searchValue,
      segments: this.segmentIn,
      products: this.productIn,
      types: types
    }

    console.log("start search", search);
  }

  /**
   * Clear search value when user click x icon
   */
  clearSearchValue(){
    this.searchValue="";
    this.search.emit(null);
  }

  clearFilters(){

    console.log("clear filters");

  }

  saveFilters(){

    console.log("save filters");

  }
}
