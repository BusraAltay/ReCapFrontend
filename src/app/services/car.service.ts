
import { ListResponseModel } from './../models/listResponseModel';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Car } from '../models/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl = "http://localhost:46465/api/"
  constructor(private httpClient:HttpClient) { }

  // getCarDetails():Observable<ListResponseModel<Car>>{
  //   let newPath = this.apiUrl + "cars/getcardetails"
  //   return this.httpClient.get<ListResponseModel<Car>>(newPath);
  // }

  // getCarDetailsByBrand(brandId:number):Observable<ListResponseModel<Car>>{
  //   let newPath = this.apiUrl + "cars/getbybrand?id=" + brandId
  //   return this.httpClient.get<ListResponseModel<Car>>(newPath);
  // }

  // getCarDetailsByColor(colorId:number):Observable<ListResponseModel<Car>>{
  //   let newPath = this.apiUrl + "colors/getbycolor?id=" + colorId
  //   return this.httpClient.get<ListResponseModel<Car>>(newPath);
  // }
}
