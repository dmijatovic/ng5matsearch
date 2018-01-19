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
      required:true, default:'',width:'200px'
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
    },{ fid:'country',label:'Country',
      controlType:'select', dataType:'text',
      required:false, default:null,
      options:[
        { id:'country1', label:'Country 1' },
        { id:'country2', label:'Country 2' },
        { id:'country3', label:'Country 3' },
        { id:'country4', label:'Country 4' }
      ]
    }
  ]},{
  id:'favorites',title:'My favorite', width:'450px',
  items:[
    { fid:'animal', label:'Animal is ...',
      controlType:'input', dataType:'text',
      required:true, default:null
    },{ fid:'food',label:'Food is...',
      controlType:'radio', dataType:'text',
      required:false, class:"mat-control-group flex-col",
      options:[
        { id:'f1', label:'Food 1' },
        { id:'f2', label:'Food 2' },
        { id:'f3', label:'Food 3' },
        { id:'f4', label:'Food 4' }
      ]
    },{ fid:'auto',label:'Car is...',
    controlType:'checkbox', dataType:'text',
    required:false, class:"mat-control-group flex-col",
    options:[
      //multiple needs field and values true/false on all options
      { fid:'auto-a1', label:'Audi a1', default:false},
      { fid:'auto-a2', label:'Audi a2', default:false},
      { fid:'auto-a3', label:'Audi a3', default:false},
      { fid:'auto-a4', label:'Audi a4', default:false}
    ]
  }
  ]}
]
