import { Component, OnInit } from '@angular/core';

import { DragDropFieldsService } from '../drag.drop.svc';

@Component({
  selector: 'app-drag-drop-source',
  providers:[ DragDropFieldsService ],
  templateUrl: './source.component.html',
  styleUrls: ['./source.component.scss']
})
export class DragDropSource implements OnInit {
  //list of fields
  fields:any=[];
  
  constructor(
    private fieldSvc:DragDropFieldsService
  ) { }

  ngOnInit() {
    //debugger
    this.getFields();
  }
  /**
   * Get list of fields we can use
   */
  getFields(){
    this.fieldSvc.getFields()
    .subscribe((d)=>{
      this.fields = d;
    });
  }

  /**
   * OnStartDrag event fired from html template
   * @param e 
   */
  startDrag(e){
    //debugger

    let fieldId = e.currentTarget.dataset.fieldId;
    let data = this.fields.filter(i => i.id === fieldId);

    if (data){

      //set data 
      e.dataTransfer.setData("json",JSON.stringify(data));
      //set drop effect
      e.dataTransfer.dropEffect = "copy";

    }else{
      console.error("Failed to find data item!");
    }
    
    console.log("Start drag...", e);

  }
}
