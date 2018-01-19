import { Component, OnInit } from '@angular/core';

import { FormsService } from '../forms.service';

@Component({
  selector: 'app-form-demo-page',
  providers:[ FormsService ],
  templateUrl: './form-demo-page.html',
  styleUrls: ['./form-demo-page.scss'],
  host:{
    'class':'app-body flex-col'
  }
})
export class FormDemoPage implements OnInit {
  
  formGroups:any=[];

  constructor(
    private formSvc:FormsService
  ){}

  ngOnInit() {
    this.formSvc.getFielGroups()
    .subscribe((d)=>{
      console.log(d);
      this.formGroups = d;
    });
  }

}
