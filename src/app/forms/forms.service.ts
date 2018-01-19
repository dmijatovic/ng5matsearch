import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FormsService {

  constructor() { }

  getFielGroups(){
    return new Observable((observer)=>{

      observer.next(fieldsGroups);

    });
  }

}


const fieldsGroups=[{
  id:'group1',title:'Name & Birthdate', items:[
    {fieldId:'firstName',label:'First Name', type:'text', 
      required:true, value:''},
    {fieldId:'lastName',label:'Last Name', type:'text', required:true},
    {fieldId:'birthDate',label:'Date of birth', type:'date', required:false}
  ]},{
  id:'group2',title:'Address', items:[
    {fieldId:'street',label:'Street', type:'text', required:true},
    {fieldId:'postcode',label:'Postal code', type:'text', required:true},
    {fieldId:'city',label:'City', type:'date', required:true}
  ]}
]