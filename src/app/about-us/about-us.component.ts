import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
myname :string = "Gayathri"
name :string ="";
myimagepath :string = "./assets/wolf.png" 
isShow :boolean = false
color:string = "class1"
  constructor() { }

  ngOnInit(): void {
  }
  showImage()
  {
    this.isShow= true;
  }
  hideImage()
  {
    this.isShow= false;
  }
  greet(name:string):void
  {
    alert("Hello " + name)
  }
  OnColorChange(val:any)
  {
    
    if(this.color == val.target.value)
    {
      debugger;
      this.color = "class1"

    }
    else{
      this.color = "class2"
    }












  }

}
