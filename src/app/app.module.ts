//Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//App modules
import { LayoutModule } from './layout/layout.module';
import { SearchModule } from './search/search.module';

//App components
import { AppRoot } from './app.root';
import { PageLayout } from './layout/page/page.component';
import { HomePage } from './home/home.component';
import { SearchPage } from './search/page/search.page';

//App services
//set services here only 
//if these are shared throughout whole app
const routes=[{
  path:'',
  redirectTo:'home',
  pathMatch:'full',
},{
  path:'',
  component: AppRoot,
  children:[{
    path:'',
    component: PageLayout,
    children:[{
      path:'home',
      component: HomePage  
    },{
      path:'search',
      component:SearchPage
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
}]

@NgModule({
  declarations: [
    AppRoot, HomePage
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule, SearchModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ ],
  bootstrap: [ AppRoot ]
})
export class AppModule { }
