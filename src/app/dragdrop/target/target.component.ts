import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';

import { DragDropConditionsService } from '../drag.drop.svc';

@Component({
  selector: 'app-drag-drop-target',
  templateUrl: './target.component.html',
  styleUrls: ['./target.component.scss']
})
export class DragDropTarget implements OnInit, OnDestroy {
  //active box to indicate
  active={
    area:false,
    item:false,
    newGroup:false,
  };
  groups:any=[];
  groups$:Subscription;
  //list of conditions
  //conditions:any=[];
  //conditions$:Subscription;
  constructor(
    private conSvc:DragDropConditionsService
  ) { }

  ngOnInit() {
    this.groups$ = this.conSvc.groups$
    .subscribe((g)=>{
      if(g){
        //debugger 
        this.groups = g;
      }
    }); 
  }
  /**
   * 
   * @param e 
   */
  onDragLeaveNewGroup(e){
    console.log("drag leave...", e.currentTarget.className);
    
    this.active.newGroup = false;
  }
  onDragOverAddNewGroup(e){
    console.log("drag over...", e.currentTarget.className);
    e.preventDefault();
    e.dataTransfer.dropEffect = "copy";
    this.active.newGroup = true;
  }
  onDropNewGroup(e){
    console.log("drop new group...", e.currentTarget.className);
    //get data 
    e.preventDefault();
    //debugger
    let strData = e.dataTransfer.getData("json");
    let field = JSON.parse(strData);
    if (field.length == 1){
      console.log("drop item...", field[0]);
      //add to collection
      this.conSvc.addGroup({
        operator:"AND",
        conditions:[{
          ...field[0],
          uid:this.conSvc.createUid()
        }]
      });
      this.active.newGroup = false; 
    }else{
      console.warn("Unexpected data array length on drop!");
    }
  }

  ngOnDestroy(){
    //this.conditions$.unsubscribe();
    this.groups$.unsubscribe();
  }
}
