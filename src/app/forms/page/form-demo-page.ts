import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup , FormControl, Validators } from '@angular/forms';
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
  pageTitle="Form broken in components";

  formGroups:any=[];
  formMain:any;

  constructor(
    private formSvc:FormsService,
    private fb:FormBuilder

  ){}

  ngOnInit() {

    this.formSvc.getFielGroups()
    .subscribe((d)=>{
      console.log(d);
      this.createFormGroups(d) ;
    });
  }

  createFormGroups(groups){
    let gr={};
    //debugger
    groups.map((g)=>{

      let group = this.createFormGroup(g);

      gr[g.id] = group;

    });

    this.formMain = this.fb.group(gr);
    this.formGroups = groups;

    console.log("formMain", this.formMain);
    console.log("formGroups", this.formGroups);
  }
  /**
   * Create form group based on fields
   * received in defitions from service
   * @param g
   */
  createFormGroup(g){
    let fields={}, formGroup;

    g.items.map((f)=>{
      //checkbox type is multiple
      if (f.controlType=='checkbox'){
        //debugger
        f.options.map((c)=>{
          fields[c.fid] = this.createFormControl({
            required: f.required,
            default: c.default
          });
        })
      }else{
        fields[f.fid] = this.createFormControl(f);
      }
    })
    //here is new form group
    formGroup = new FormGroup(fields);
    //debugger
    return formGroup;
  }
  /**
   * Create form field dynamically based on
   * field definition received from service
   * @param f
   */
  createFormControl(f){
    if (f.required){
      return new FormControl(f.default, Validators.required);
    }else if (f.default){
      return new FormControl(f.default);
    }else{
      return new FormControl();
    }
  }
  /**
   * Save knop
   * enabled only when form is valid
   */
  saveForm(){
    //save form data
    if (this.formMain.valid){
      this.formSvc.saveFormData(this.formMain.value);
    }else{
      console.warn("Form not valid...");
    }
  }

}
