import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'

import {
  MatFormFieldModule,
  MatInputModule, MatRadioModule, MatCheckboxModule,
  MatSelectModule, MatButtonModule,
  MatDatepickerModule, MatNativeDateModule
} from '@angular/material';


import { FormDemoPage } from './page/form-demo-page';
import { GroupComponent } from './group/group.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    //material modules
    MatInputModule, MatRadioModule, MatCheckboxModule,
    MatSelectModule, MatFormFieldModule,
    MatDatepickerModule, MatNativeDateModule,
    MatButtonModule
  ],
  declarations: [
    FormDemoPage, GroupComponent
  ]
})
export class FormsTestModule { }
