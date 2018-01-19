import { Component, OnInit, Input } from '@angular/core';

import {
  FormControl, FormGroup, Validators,
  ControlContainer
} from '@angular/forms';

@Component({
  selector: 'app-form-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {
  //get field group definitions
  @Input() fieldGroup:any;

  groupForm:any;
  fieldDef:any;

  constructor(
    public controlContainer:ControlContainer
  ){}

  ngOnInit() {
    //console.log("FormGroup...fieldGroup", this.fieldGroup);
    this.createGroupForm();
  }

  createGroupForm(){
    let fgroup={};
    //debugger

    this.fieldGroup.items.map((f)=>{

      if (f.required){
        fgroup[f.fid] = new FormControl(f.default, Validators.required);
      }else if (f.default){
        fgroup[f.fid] = new FormControl(f.default);
      }else{
        fgroup[f.fid] = new FormControl();
      }

    });
    //copy field definition to local prop
    this.fieldDef = this.fieldGroup.items;
    //debugger
    this.groupForm = new FormGroup(fgroup);
    console.log("FormGroup.groupForm...", this.groupForm);
  }

}
