import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeneralApiService {
  gender=['Female','Male','Other'];
  constructor( private http:HttpClient) { }
  getGender():any
  {
    return this.gender;
  }
  displayUserList():Observable<any>
  {
    return this.http.get("https://jsonplaceholder.typicode.com/users")
  }
}
