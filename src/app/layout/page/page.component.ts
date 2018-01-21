import { Component, OnInit, OnDestroy, HostBinding, ViewChild, ElementRef } from '@angular/core';

import { Router } from '@angular/router';


@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
  host:{
    'class':'app-page '
  }
})
export class PageLayout implements OnInit, OnDestroy {
  //dynamically change classes
  //note! all classes are overwriten
  @HostBinding('class') headerType = 'app-page header-xl';
  //default large (heigh) header
  //other options: md and sm
  //change using classes
  //headerType="header-xl";

  constructor(private router:Router) { }

  ngOnInit() {
    //console.log("router", this.router);
    //list for scroll
    window.addEventListener("scroll",
      this.listenForYScroll.bind(this)
    );
  }

  listenForYScroll(){
    let yPos = window.pageYOffset;
    console.log("pageYOffset...", yPos);

    //debugger

    switch (true){
      case yPos > 100:
        this.headerType = "app-page header-sm";
        break;
      case yPos < 10:
        this.headerType = "app-page header-xl";
        break;
      default:
        this.headerType = "app-page header-md";
    }

    console.log("headerType...", this.headerType);

  }
  ngOnDestroy(){

  }

}
