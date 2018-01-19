import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'

import { FormDemoPage } from './page/form-demo-page';
import { GroupComponent } from './group/group.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [FormDemoPage, GroupComponent]
})
export class FormsTestModule { }
