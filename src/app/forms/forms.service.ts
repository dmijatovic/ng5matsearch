import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FormsService {

  constructor() { }
  /**
   *
   */
  getFielGroups(){
    return new Observable((observer)=>{

      observer.next(fieldsGroups);

    });
  }
  /**
   *
   * @param data
   */
  saveFormData(data){

    console.log("Save form data...", data );

  }
}

const fieldsGroups=[{
  id:'name', title:'Name & Birthdate', width:'450px',
  items:[
    { fid:'firstName', label:'First Name',
      controlType:'input', dataType:'text',
      required:true, default:'', width:'150px'
    },{ fid:'lastName', label:'Last Name',
      controlType:'input', dataType:'text',
      required:true, default:'',width:'270px'
    },{ fid:'birthDate', label:'Date of birth',
      controlType:'datepicker', dataType:'date',
      required:false, default:null, width:null
    }
  ]},{
  id:'address',title:'Address', width:'450px',
  items:[
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
