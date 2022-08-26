import { Component, OnInit } from '@angular/core';
import { CustomPipe } from '../custom.pipe';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {

  isLoggedIn:boolean = false
  myFullName:string =""
  myFullEmail:string =""
  isSub:boolean= false
  e:boolean = true;
  students:any[] =[
    { Id:101,FirstName:"Gayathri",LastName:"Kumanan",Branch:"IT",DOB:"12/05/2022",gender:"Female",Salary:10000},
    { Id:102,FirstName:"Suresh",LastName:"kannan",Branch:"IT",DOB:"12/05/2022",gender:"male",Salary:20000},
    { Id:103,FirstName:"Mani",LastName:"Muthu",Branch:"computer",DOB:"12/05/2022",gender:"male",Salary:30000},
    { Id:104,FirstName:"Seetha",LastName:"kumar",Branch:"Science",DOB:"12/05/2022",gender:"Female",Salary:50000},
    { Id:105,FirstName:"Magesh",LastName:"Lokesh",Branch:"History",DOB:"12/05/2022",gender:"male",Salary:90000}
  ]
  constructor() { }

  ngOnInit(): void {
  }
  justCheck():boolean
  {
    return true
  }
  Submit(val1:any,val2:any)
  {
    this.isSub = true
    this.myFullName = val1;
    this.myFullEmail = val2;
  }
}
