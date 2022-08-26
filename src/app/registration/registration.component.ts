import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  firstName:string = '';
  lastName:string ='';
  address:string ='';
  phoneNo?:number 
  gender:string='' 
  gender1:string=''
  user: any = {};
  options:any =[
    'Female',
    'Male',
    'Other'
  ];
  
  constructor() { }

  ngOnInit(): void {
  }
 OnSelect(val:any)
 {
  this.gender1 = val.target.value
    
 }
 onSubmit(user:any)
 {
  debugger;
  this.firstName = user.firstName
  this.lastName = user.lastName
  this.address = user.address
  this.phoneNo = user.phoneNo
  this.gender = this.gender1
  user.firstName =''
  user.lastName = ''
  user.address =''
  user.phoneNo =''
 }
}
  

