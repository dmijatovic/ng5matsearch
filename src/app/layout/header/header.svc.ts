import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';


const menuItems=[
  { matIco: 'dashboard', routerLink:'/forms', label:'Forms' },
  { matIco: 'search', routerLink:'/search', label:'Search' },
  { matIco: 'open_with' , routerLink:'/dragdrop', label:'Drag and drop' },
  { matIco: 'home', routerLink:'/home', label:'Home' }
]


@Injectable()
export class HeaderService {

  constructor() { }

  getMenuItems(){
    return new Observable((observer)=>{

      observer.next( menuItems );

    }); 
  }
}
