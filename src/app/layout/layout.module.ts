import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PageLayout } from './page/page.component';

import { 
  MatToolbarModule, MatIconModule, MatButtonModule 
} from '@angular/material';

/*
const routes=[{
  path:'',
  component: PageComponent
}]*/

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,MatIconModule,
    MatButtonModule,
    RouterModule
  ],
  declarations: [HeaderComponent, FooterComponent, PageLayout],
  exports:[ PageLayout ]
})
export class LayoutModule { }
