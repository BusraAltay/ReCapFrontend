import { User } from './../models/user';
import { ListResponseModel } from './../models/listResponseModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = "http://localhost:46465/api/users/"

  constructor(private httpClient:HttpClient) { }

  getByUserId(id:number):Observable<ListResponseModel<User>>{
    let newPath = this.apiUrl + "getbyuserid?id=" + id
    console.log(newPath);
    return this.httpClient.get<ListResponseModel<User>>(newPath);
  }

  getUserByEmail(email:string):Observable<User>{
    let newPath = this.apiUrl + "getbyuseremail?email=" + email
    return this.httpClient.get<User>(newPath);
  }

  getUsers():Observable<ListResponseModel<User>>{
    let newPath = this.apiUrl + "getall"
    return this.httpClient.get<ListResponseModel<User>>(newPath)
  }

  profileUpdate(user:User):Observable<ResponseModel>{
    console.log(user);
    return this.httpClient.post<ResponseModel>(this.apiUrl + "updateprofile", {
      user:{
        'id': user.id,
        'firstName': user.firstName,
        'lastName': user.lastName,
        'email': user.email,
        'status':user.status
      },
      password:user.password
    });
  }
}
