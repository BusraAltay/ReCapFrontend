import { ResponseModel } from './../models/responseModel';
import { Car } from './../models/car';
import { SingleResponseModel } from './../models/singleResponseModel';
import { ListResponseModel } from './../models/listResponseModel';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl = "http://localhost:46465/api/"
  constructor(private httpClient:HttpClient) { }

  getAll():Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl + "cars/getall";
    return this.httpClient.get<ListResponseModel<Car>>(newPath)
  }

  add(car:Car):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl + "cars/add",car);
  }
  
   update(car:Car):Observable<ResponseModel>{
     return this.httpClient.post<ResponseModel>(this.apiUrl + "cars/update", car)
   }

   delete(car:Car):Observable<ResponseModel>{
     return this.httpClient.post<ResponseModel>(this.apiUrl + "cars/delete", car)
   }
  
  getCurrentCar(carId:number):Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl + "cars/getbycarid?id=" + carId
    console.log(newPath);
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
}
