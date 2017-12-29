import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
  `,
  host:{
    'class':'app-root'
  }
})
export class AppRoot {
  //title = 'app';
}
