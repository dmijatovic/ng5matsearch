import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
  host:{
    'class':'app-page'
  }
})
export class PageLayout implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
    console.log("router", this.router);
  }

}
