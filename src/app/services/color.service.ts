import { Color } from './../models/color';
import { ListResponseModel } from './../models/listResponseModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  apiUrl = "http://localhost:46465/api/colors/"

  constructor(private httpClient:HttpClient) { }

  getColors():Observable<ListResponseModel<Color>>{
    let newPath = this.apiUrl + "getall"
    return this.httpClient.get<ListResponseModel<Color>>(newPath);
  }
  
  add(color:Color):Observable<ResponseModel>{
    let newPath = this.apiUrl + "add"
    return this.httpClient.post<ResponseModel>(newPath, color);
  }
  
   update(color:Color):Observable<ResponseModel>{
    let newPath = this.apiUrl + "update"
    return this.httpClient.post<ResponseModel>(newPath, color)
   }

   delete(color:Color):Observable<ResponseModel>{
    let newPath = this.apiUrl + "delete"
    return this.httpClient.post<ResponseModel>(newPath, color)
   }
  
  getCurrentColor(id:number):Observable<ListResponseModel<Color>>{
    let newPath = this.apiUrl + "getbycolorid?id=" + id
    console.log(newPath);
    return this.httpClient.get<ListResponseModel<Color>>(newPath);
  }
}
