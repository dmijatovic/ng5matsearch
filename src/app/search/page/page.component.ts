import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
  host:{
    'class':'app-body'
  }
})
export class PageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
