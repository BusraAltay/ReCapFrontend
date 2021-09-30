import { RentalDetails } from './../models/rentaldetails';
import { ListResponseModel } from './../models/listResponseModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SingleResponseModel } from '../models/singleResponseModel';
import { Rental } from '../models/rental';

@Injectable({
  providedIn: 'root'
})
export class RentaldetailService {

  apiUrl = "http://localhost:46465/api/"

  constructor(private httpClient:HttpClient) { }

  getRentalDetails():Observable<ListResponseModel<RentalDetails>>{
    let newPath = this.apiUrl + "rentals/getrentaldetails";
    return this.httpClient.get<ListResponseModel<RentalDetails>>(this.apiUrl);
  }

  // getCheckRentAvailable(carId:number, rentDate:Date, deliveryDate:Date)
  //   :Observable<SingleResponseModel<boolean>>{
  //   let newPath = this.apiUrl + "rentals/checkrental?carId" + carId + "&rentDate=" + rentDate 
  //   + "&deliveryDate=" + deliveryDate;
  //   return this.httpClient.get<SingleResponseModel<boolean>>(newPath);
  // }

  rentCar(rental:Rental):Observable<SingleResponseModel<number>>{
    let newPath = this.apiUrl + "rentals/addrental";
    console.log(newPath);
    return this.httpClient.post<SingleResponseModel<number>>(newPath,rental);
  }
}
