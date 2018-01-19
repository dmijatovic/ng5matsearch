//Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//App modules
import { LayoutModule } from './layout/layout.module';
import { SearchModule } from './search/search.module';
import { DragDropModule } from './dragdrop/drag.drop.module';
import { FormsTestModule } from './forms/forms.module';

//App components
import { AppRoot } from './app.root';
import { PageLayout } from './layout/page/page.component';
import { HomePage } from './home/home.component';
import { SearchPage } from './search/page/search.page';
import { DragDropPage } from './dragdrop/page/drag.drop.page';
import { FormDemoPage } from './forms/page/form-demo-page';


//App services
//set services here only
//if these are shared throughout whole app
const routes:Routes=[{
  path:'',
  redirectTo:'home',
  pathMatch:'full',
},{
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
    component: SearchPage
  }]
},{
  path:'dragdrop',
  component: PageLayout,
  children:[{
    path:'',
    component: DragDropPage
  }]
},{
  path:'forms',
  component: PageLayout,
  children:[{
    path:'',
    component: FormDemoPage
  }]
}]

@NgModule({
  declarations: [
    AppRoot, HomePage
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule, SearchModule, DragDropModule,
    FormsTestModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ ],
  bootstrap: [ AppRoot ]
})
export class AppModule { }
