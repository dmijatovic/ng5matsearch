//Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//App modules
import { LayoutModule } from './layout/layout.module';
import { SearchModule } from './search/search.module';
import { DragDropModule } from './dragdrop/drag.drop.module';

//App components
import { AppRoot } from './app.root';
import { PageLayout } from './layout/page/page.component';
import { HomePage } from './home/home.component';
import { SearchPage } from './search/page/search.page';
import { DragDropPage } from './dragdrop/page/drag.drop.page';

//App services
//set services here only 
//if these are shared throughout whole app
const routes=[{
  path:'',
  redirectTo:'home',
  pathMatch:'full',
},{
  path:'',
  component: PageLayout,
  children:[{    
    path:'home',
    component: HomePage  
  },{
    path:'search',
    component: SearchPage
  },{
    path:'dragdrop',
    component: DragDropPage
  }]
  /*},{
    path:'home',
    component: PageLayout,
    children:[{
      path:'',
      component: HomePage
    }]
  },{
    path:'search',
    component: PageLayout,
    children:[{
      path:'',
      component:SearchPage
      //loadChildren:'./search/search.module#SearchModule'
    }]*/
}]

@NgModule({
  declarations: [
    AppRoot, HomePage
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule, SearchModule, DragDropModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ ],
  bootstrap: [ AppRoot ]
})
export class AppModule { }
