import { Component, OnInit, OnDestroy, Input } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';

import { DragDropConditionsService } from '../drag.drop.svc';

@Component({
  selector: 'app-condition-group',
  templateUrl: './drop.group.html',
  styleUrls: ['./target.component.scss'],
  //providers: [ DragDropConditionsService ]
})
export class DragDropTargetGroup implements OnInit, OnDestroy {
  //active box to indicate
  active={
    area:false,
    item:false,
    //newGroup:false,
  };
  //group uid
  @Input() gid:string=null;
  //group operator
  @Input() operator:string="AND";
  //list of conditions
  @Input() conditions:any=[];

  conditions$:Subscription;
  constructor(
    private conSvc:DragDropConditionsService
  ){ }

  ngOnInit() {
    /*
    this.conditions$ = this.conSvc.conditions$
    .subscribe((c)=>{
      if(c){
        //debugger 
        this.conditions = c;
      }
    });*/ 
  }
  /**
   * Dragging over the area where we do 
   * not accept new items to be dropped
   * @param e 
   */
  onDragEnterInvalid(e){
    //debugger
    console.log("drag enter...", e.currentTarget.className);
    //e.preventDefault();
    e.dataTransfer.dropEffect = "none";
    this.active.area = false;
  }
  /**
   * 
   */
  onDragOverInvalid(e){
    //debugger
    console.log("drag over...", e.currentTarget.className);
    //e.preventDefault();
    //e.dataTransfer.dropEffect = "none";
    this.active.area = false;
    this.active.item = false;
  }
  /**
   * Draging over the area that accept items
   * this event is fired a lot!
   * @param e 
   */
  onDragOverDropArea(e){
    console.log("drag over...", e.currentTarget.className);
    e.preventDefault();
    e.dataTransfer.dropEffect = "copy";
    this.active.area = true;
    //this.active.item = false;
  }
  /**
   * Entering the area that accepts items
   * @param e 
   */
  onDragEnterDropArea(e){
    console.log("drag enter...", e.currentTarget.className);
    e.preventDefault();
    e.dataTransfer.dropEffect = "copy";
    this.active.area = true;
  }
   /**
   * Leaving the area that accepts items
   * Note! when navigating between child and partent elements
   * this event is fired too. Exmine closely if this event
   * can be of use in your application! 
   * @param e 
   */
  onDragLeaveDropArea(e){
    console.log("drag leave...", e.currentTarget.className);
    this.active.area = false;
  }
  /**
   * Exiting the area that accepts items
   * what is difference vs leave event?
   * Note! This event does not fire in Chrome
   * maybe is browser specific
   * @param e 
   */
  onDragExitDropArea(e){
    console.log("drag exit...", e.currentTarget.className);
    //e.preventDefault();
    //e.dataTransfer.dropEffect = "none";
    //this.active.area = false;
  }
   /**
   * Entering the dummy item that indicates
   * where new item will be added 
   * @param e 
   */
  onDragEnterItem(e){
    console.log("drag enter...", e.currentTarget.className);
    //allow droping
    e.preventDefault();
    e.dataTransfer.dropEffect = "link";
    //this.active.area = true;
    this.active.item = true;
  }
  /**
   * Dragging over the dummy item that indicates
   * where new item will be added 
   * @param e 
   */
  onDragOverItem(e){
    console.log("drag over...", e.currentTarget.className);
    e.preventDefault();
    e.dataTransfer.dropEffect = "link";
    //this.active.area = true;
    this.active.item = true;
  }
  /**
   * Drop in the dummy item area (bingo!)
   * @param e 
   */
  onDropItem(e){
    e.preventDefault();
    //debugger
    let strData = e.dataTransfer.getData("json");
    let field = JSON.parse(strData);
    if (field.length == 1){
      console.log("drop item...", field[0]);
      //add to collection
      //debugger 
      let gr = this.conSvc.addCondition({
        gid: this.gid,
        condition:{
          ...field[0],
          cid:this.conSvc.createUid()
        }
      });
    
      //now update group
      this.conSvc.updateGroup({
        gid: this.gid,
        data: gr
      });
    
      //remove focus
      this.active.item = false;
      this.active.area = false;
      
    }else{
      console.warn("Unexpected data array length on drop!");
    }
  }
   /**
   * Leaving the dummy item that indicates
   * where new item will be added 
   * @param e 
   */
  onDragLeaveItem(e){
    console.log("drag leave...", e.currentTarget.className);
    e.preventDefault();
    //e.dataTransfer.dropEffect = "none";
    //this.active.area = true;
    this.active.item = false;
    //console.log("OnDragOver...", e);
  }
   /**
   * Exiting the dummy item that indicates
   * where new item will be added 
   * @param e 
   */
  onDragExitItem(e){
    console.log("drag exit...", e.currentTarget.className);
    e.preventDefault();
    //e.dataTransfer.dropEffect = "none";
    this.active.item = false;
  }
  /**
   * Delete element
   * @param id 
   */
  deleteCondition(cid){
    console.log("delete item", cid);
    
    let gr = this.conSvc.deleteCondition(
      this.gid, cid
    );

     //now update group
    this.conSvc.updateGroup({
      gid: this.gid,
      data: gr
    });

  }
  /**
   * Edit element
   * @param id 
   */
  editCondition(cid){
    console.log("edit item", cid);
  }

  ngOnDestroy(){
    //this.conditions$.unsubscribe();
  }
}
