import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';

import { 
  MatInputModule, MatIconModule, MatButtonModule 
} from '@angular/material';

import { SearchBox } from './box/box.component';
import { SearchBody } from './body/body.component';
import { PageComponent } from './page/page.component';

import { SearchService } from './search.svc';


const routes=[{
  path:'',
  component: PageComponent
}]

@NgModule({
  imports: [
    CommonModule, FormsModule,
    //material modules
    MatInputModule, MatIconModule,
    MatButtonModule,
    RouterModule.forChild(routes)
  ],
  providers:[ SearchService ],
  declarations: [ SearchBox, SearchBody, PageComponent ]
})
export class SearchModule { }
