import { Component, OnInit, Input } from '@angular/core';

import {
  FormBuilder, FormControl, FormGroup, Validators
} from '@angular/forms';

@Component({
  selector: 'app-form-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {
  @Input() fieldGroup:any;

  groupForm:any;

  constructor(
    private fb:FormBuilder
  ){}

  ngOnInit() {

    console.log("FormGroup...fieldGroup", this.fieldGroup);

    this.createGroupForm();
  }

  createGroupForm(){
    let fields={};
    //debugger

    this.fieldGroup.items.map((f)=>{

      if (f.required){
        fields[f.fid] = [f.default, Validators.required];
      }else if (f.default){
        fields[f.fieldId] = [f.default];
      }else{
        fields[f.fieldId] = [];
      }
    });
    //debugger
    this.groupForm = this.fb.group(fields);

    console.log("FormGroup.groupForm...", this.groupForm);
  }

}
