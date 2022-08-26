import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent implements OnInit {
  selectedItem:string =""
  productList:string[] =['Default','Laptop','Mobile','TV','WashingMachine','Car']
  myCss:string ="class1"
  myCss1:string="class2"

  constructor() { }

  ngOnInit(): void {
  }
  selectItem(val:any)
  {
    this.selectedItem = val.target.value
  }
}
