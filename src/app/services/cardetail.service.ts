import { CarDetails } from './../models/cardetails';
import { ListResponseModel } from './../models/listResponseModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardetailService {

  apiUrl = "http://localhost:46465/api/"

  constructor(private httpClient:HttpClient) { }

  getCarDetails():Observable<ListResponseModel<CarDetails>>{
    let newPath = this.apiUrl + "cars/getcardetails"
    console.log(newPath);
    return this.httpClient.get<ListResponseModel<CarDetails>>(newPath);
  }

  getCarDetailsByBrand(brandId:number):Observable<ListResponseModel<CarDetails>>{
    let newPath = this.apiUrl + "cars/getbybrand?brandid=" + brandId
    return this.httpClient.get<ListResponseModel<CarDetails>>(newPath);
  }

  getCarDetailsByColor(colorId:number):Observable<ListResponseModel<CarDetails>>{
    let newPath = this.apiUrl + "cars/getbycolor?colorid=" + colorId
    console.log(newPath);
    return this.httpClient.get<ListResponseModel<CarDetails>>(newPath);
  }

  getCurrentCarDetails(carId:number):Observable<ListResponseModel<CarDetails>>{
    let newPath = this.apiUrl + "cars/getbycarid?id=" + carId
    console.log(newPath);
    return this.httpClient.get<ListResponseModel<CarDetails>>(newPath);
  }

  getCarsByFilter(brandId:number, colorId:number): Observable<ListResponseModel<CarDetails>> {
    let newPath = this.apiUrl + "cars/getfilterbrandandcolor?brandid=" + brandId 
    + "&colorid=" + colorId;
    console.log(newPath);
    return this.httpClient.get<ListResponseModel<CarDetails>>(newPath);
  }
}
