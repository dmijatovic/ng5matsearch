import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule, MatIconModule } from '@angular/material';

import { DragDropPage } from './page/drag.drop.page';
import { DragDropSource } from './source/source.component';
import { DragDropTarget } from './target/target.component';

import { DragDropTargetGroup } from './target/drop.group';


import { DragDropConditionsService } from './drag.drop.svc';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule, MatIconModule
  ],
  providers:[ DragDropConditionsService ],
  declarations: [ 
    DragDropPage, DragDropSource, DragDropTarget,
    DragDropTargetGroup
  ]
})
export class DragDropModule { }
