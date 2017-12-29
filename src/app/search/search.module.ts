
//Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

//Material
import { 
  MatInputModule, MatIconModule, MatButtonModule,
  MatSelectModule, MatCheckboxModule
} from '@angular/material';

//Local components & services
import { SearchBox } from './box/search.box';
import { SearchResults } from './results/search.results';
import { SearchPage } from './page/search.page';
import { SearchService } from './search.svc';

/* when lazy loading module
 routes might need to be adjusted?
const routes=[{
  path:'',
  component: SearchPage
}]*/

@NgModule({
  imports: [
    CommonModule, FormsModule,
    //material modules
    MatInputModule, MatIconModule,
    MatButtonModule, MatSelectModule,
    MatCheckboxModule,
    HttpClientModule
    //RouterModule.forChild(routes)
  ],
  providers:[ SearchService ],
  declarations: [ SearchBox, SearchResults, SearchPage ],
  //exports:[ SearchBox, SearchBody, SearchPage ]
})
export class SearchModule { }
