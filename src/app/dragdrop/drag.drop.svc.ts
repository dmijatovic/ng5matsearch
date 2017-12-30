//Angular
import {Injectable} from '@angular/core';

//RxJs
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

/**
 * Managing drag and drop events to create filter conditions
 */
@Injectable()
export class DragDropConditionsService{

  constructor(){
    console.log("DragDropService...started");
  }

  masterOperator:string="AND";
  mo = new BehaviorSubject<string>(this.masterOperator);
  masterOperator$ = this.mo.asObservable();
  setMasterOperator(mo){
    this.masterOperator = mo;
    this.mo.next(mo);
  }


  conditions:any=[];
  cond = new BehaviorSubject<any>(this.conditions)
  conditions$ = this.cond.asObservable();
  addCondition(cond){
    //add condition to array
    this.conditions.push(cond);
    //publish new array
    this.cond.next(this.conditions);
  }
  deleteCondition(id){
    //create new array with valid items
    let cl = this.conditions.filter((c)=>{
      return c.uid != id
    });
    //overwrite with new
    this.conditions = cl;
    //emit new data
    this.cond.next(cl);
  }

  //function for creating unique id
  //used for component referrence
  //when deleting
  createUid() {
    //we base uid on unique time creation
    //and remove spaces, comas etc.
    let timestamp = new Date()
      .toUTCString()
      .replace(/ |,|;|:/g, "")
      .toLowerCase();
    //add random number to it
    timestamp += Math.round(Math.random() * 100000);
    return timestamp;
  },


}



/**
 * Drag and drop source field service 
 * gets the possible fields to drag and drop 
 * 
 */
@Injectable()
export class DragDropFieldsService{
  constructor(){
    //console.log("DragDropSourceDataService...started");
  }
  
  getFields(){

    return new Observable((observer)=>{

      observer.next([
        {id:'f1', label:"Field 1", operators:["=","<",">","IN"], type:'number', group:'group 1'},
        {id:'f2', label:"Field 2", operators:["=","<",">","IN"], type:'number', group:'group 1'},
        {id:'f3', label:"Field 3", operators:["=","<",">","IN"], type:'number', group:'group 1'},
        {id:'f4', label:"Field 4", operators:["=","<",">","IN"], type:'number', group:'group 1'}
      ]);

      observer.complete();
    });
  }
}