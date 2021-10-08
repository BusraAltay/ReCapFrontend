import { Brand } from './../models/brand';
import { ListResponseModel } from './../models/listResponseModel';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseModel } from './../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  apiUrl = "http://localhost:46465/api/brands/"

  constructor(private httpClient:HttpClient) { }

  getBrands():Observable<ListResponseModel<Brand>>{
    let newPath = this.apiUrl + "getall"
    return this.httpClient.get<ListResponseModel<Brand>>(newPath);
  }

  getCurrentBrand(id:number):Observable<ListResponseModel<Brand>>{
    let newPath = this.apiUrl + "getbybrandid?id=" + id
    console.log(newPath);
    return this.httpClient.get<ListResponseModel<Brand>>(newPath);
  }

  add(brand:Brand):Observable<ResponseModel>{
    let newPath = this.apiUrl + "add"
    return this.httpClient.post<ResponseModel>(newPath, brand);
  }
  
   update(brand:Brand):Observable<ResponseModel>{
    let newPath = this.apiUrl + "update"
     return this.httpClient.post<ResponseModel>(newPath, brand)
   }

   delete(brand:Brand):Observable<ResponseModel>{
    let newPath = this.apiUrl + "delete"
     return this.httpClient.post<ResponseModel>(newPath, brand)
   }
}
