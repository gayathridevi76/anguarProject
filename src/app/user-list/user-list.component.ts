import { Component, OnInit } from '@angular/core';
import { GeneralApiService } from '../services/general-api.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(private Api:GeneralApiService) { }
  userList:any[] =[]
  ngOnInit(): void {
    this.Api.displayUserList().subscribe(response =>{
      console.log(response)
      this.userList = response
    }
      )
  }

}
