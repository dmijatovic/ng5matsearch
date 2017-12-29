import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LayoutModule } from './layout/layout.module';


import { AppRoot } from './app.root';
import { HomeComponent } from './home/home.component';
import { PageComponent } from './layout/page/page.component';
import { SearchModule } from './search/search.module';

const routes=[{
  path:'',
  redirectTo:'home',
  pathMatch:'full',
},{
  path:'',
  component: AppRoot,
  children:[{
    path:'home',
    component: PageComponent,
    children:[{
      path:'',
      component: HomeComponent
    }]
  },{
    path:'search',
    component: PageComponent,
    children:[{
      path:'',
      loadChildren:'./search/search.module#SearchModule'
    }]    
  }]
}]

@NgModule({
  declarations: [
    AppRoot,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule, //SearchModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ ],
  bootstrap: [ AppRoot ]
})
export class AppModule { }
