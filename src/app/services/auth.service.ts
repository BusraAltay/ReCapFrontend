import { Observable } from 'rxjs';
import { ResponseModel } from './../models/responseModel';
import { SingleResponseModel } from './../models/singleResponseModel';
import { RegisterModel } from './../models/register';
import { TokenModel } from './../models/tokenModel';
import { LoginModel } from './../models/loginModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl="http://localhost:46465/api/auth/"

  constructor(private httpClient:HttpClient) { }

  login(loginModel:LoginModel) {
    let newPath = this.apiUrl + "login";
    return this.httpClient.post<SingleResponseModel<TokenModel>>(newPath,loginModel)
  }

  register(registerModel:RegisterModel):Observable<ResponseModel>{
    let newPath = this.apiUrl + "register";
    return this.httpClient.post<ResponseModel>(newPath, registerModel);
  }

  isAuthenticated(){
    if (localStorage.getItem("token")) {
      return true;
    } else{
      return false;
    }
  }

}
