import { Cart } from './../models/cart';
import { ResponseModel } from './../models/responseModel';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  apiUrl = 'http://localhost:46465/api/';
  constructor(private httpClient: HttpClient) {}

  payment(userId: number): Observable<ResponseModel> {
    let newPath = this.apiUrl + 'payments/payment?userid=' + userId;
    return this.httpClient.get<ResponseModel>(newPath);
  }

  add(cart: Cart): Observable<ResponseModel> {
    let newPath = this.apiUrl + 'carts/add';
    return this.httpClient.post<ResponseModel>(newPath, cart);
  }
}
