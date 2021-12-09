import { Customer } from './../models/customer';
import { ListResponseModel } from './../models/listResponseModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  apiUrl = "http://localhost:46465/api/customers/"
  constructor(private httpClient:HttpClient) { }

  getCustomer():Observable<ListResponseModel<Customer>>{
    let newPath = this.apiUrl + "getall"
    return this.httpClient.get<ListResponseModel<Customer>>(newPath);
  }

  getCustomerByUserId(userId:number):Observable<Customer>{
    let newPath = this.apiUrl + "getcustomerbyuserid?id=" + userId
    return this.httpClient.get<Customer>(newPath);
  }
}
