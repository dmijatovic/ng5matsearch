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
  id:'group1', title:'Name & Birthdate', items:[
    { fid:'firstName', label:'First Name',
      controlType:'input', dataType:'text',
      required:true, default:''
    },{ fid:'lastName', label:'Last Name',
      controlType:'input', dataType:'text',
      required:true, default:''
    },{ fid:'birthDate', label:'Date of birth',
      controlType:'datepicker', dataType:'date',
      required:false, default:null
    }
  ]},{
  id:'group2',title:'Address', items:[
    { fid:'street', label:'Street',
      controlType:'input', dataType:'text',
      required:true, default:null
    },{ fid:'postcode',label:'Postal code',
      controlType:'input', dataType:'text',
      required:false, default:null
    },{ fid:'city',label:'City',
      controlType:'input', dataType:'text',
      required:false, default:null
    }
  ]}
]
