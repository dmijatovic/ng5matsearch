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
    item:false
  };
  //list of conditions
  conditions:any=[];
  conditions$:Subscription;
  constructor(
    private conSvc:DragDropConditionsService
  ) { }

  ngOnInit() {
    this.conditions$ = this.conSvc.conditions$
    .subscribe((c)=>{
      if(c){
        //debugger 
        this.conditions = c;
      }
    }); 
  }
  /**
   * Dragging over the area where we do 
   * not accept new items to be dropped
   * @param e 
   */
  onDragOverInvalid(e){
    console.log("Invalid drop area");
    e.preventDefault();
    e.dataTransfer.dropEffect = "none";
    this.active.area = false;
  }
  /**
   * Draging over the area that accept items
   * @param e 
   */
  onDragOverArea(e){
    console.log("drag over area");
    e.preventDefault();
    e.dataTransfer.dropEffect = "copy";
    this.active.area = true;
  }
  /**
   * Dragging over the dummy item that indicates
   * where new item will be added 
   * @param e 
   */
  onDragOverItem(e){
    console.log("drag over item");
    e.preventDefault();
    e.dataTransfer.dropEffect = "link";
    //this.active.area = true;
    this.active.item = true;
    //console.log("OnDragOver...", e);
  }

  onDropItem(e){
    e.preventDefault();
    //debugger
    let strData = e.dataTransfer.getData("json");
    let field = JSON.parse(strData);
    if (field.length == 1){
      console.log("OnDropItem...", field[0]);
      //add to collection
      this.conSvc.addCondition({
        ...field[0],
        uid:this.conSvc.createUid()
      });
      //this.items.push(field[0]);
      //remove focus
      this.active.item = false;
      this.active.area = false; 
    }else{
      console.warn("Unexpected data array length on drop!");
    }
  }

  deleteCondition(id){
    console.log("delete item", id);
    this.conSvc.deleteCondition(id);
  }

  ngOnDestroy(){
    this.conditions$.unsubscribe();
  }
}
