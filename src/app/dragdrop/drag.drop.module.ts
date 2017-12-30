import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DragDropPage } from './page/drag.drop.page';
import { DragDropSource } from './source/source.component';
import { DragDropTarget } from './target/target.component';

import { DragDropConditionsService } from './drag.drop.svc';

@NgModule({
  imports: [
    CommonModule
  ],
  providers:[ DragDropConditionsService ],
  declarations: [ DragDropPage, DragDropSource, DragDropTarget ]
})
export class DragDropModule { }
