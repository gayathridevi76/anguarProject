import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { GeneralApiService } from '../services/general-api.service';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
  reactiveForm!:FormGroup ;
  //--later we can intialize or
  //reactiveForm:FormGroup = new FormControl({})
  formData ={FirstName:"",LastName:"",Email:"",Mobile:0,Gender:""}
   //gender=['Female','Male','Other' ];
   gender=[];

  constructor(private serviceApi:GeneralApiService) { 
 
  }

  ngOnInit(): void {
    debugger;
    this.reactiveForm = new FormGroup({ 
      'fname': new FormControl('',[Validators.required,Validators.maxLength(10),Validators.minLength(5)]),
      'lname': new FormControl('Makeah'),
      'email': new FormControl('sfdgfs@gmail.com',[Validators.required,Validators.email]),
      'mob': new FormControl('366345343'),
      'gender': new FormControl('Female'),
    })
   
    this.gender = this.serviceApi.getGender()
  }
onSubmit()
{
  this.formData.FirstName = this.reactiveForm.value.fname;
  this.formData.LastName = this.reactiveForm.value.lname;
  this.formData.Email = this.reactiveForm.value.email;
  this.formData.Mobile = this.reactiveForm.value.mob;
  this.formData.Gender = this.reactiveForm.value.gender;
}
Reset()
{
  this.reactiveForm.reset()
}
}
