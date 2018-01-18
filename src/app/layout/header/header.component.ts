import { Component, OnInit } from '@angular/core';

import { HeaderService } from './header.svc';

@Component({
  selector: 'app-header',
  providers:[ HeaderService ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menuItems:any=[];
  constructor(
    private menuSvc:HeaderService
  ) { }

  ngOnInit() {
    this.menuSvc.getMenuItems()
    .subscribe((d)=>{
      this.menuItems = d;
    });
  }

}
