import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {
  /*fname:string=""
  lname:string=""
  email:string=""
  mob:string=""
  gender:string=""*/
  formData ={FirstName:"",LastName:"",Email:"",Mobile:0,Gender:""}

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(myform:any)
  {
    this.formData.FirstName = myform.value.fname;
    this.formData.LastName = myform.value.lname;
    this.formData.Email = myform.value.email;
    this.formData.Mobile = myform.value.mob;
    this.formData.Gender = myform.value.gender;
  }
}
