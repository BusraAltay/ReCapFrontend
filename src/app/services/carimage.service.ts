import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarimageService {

  apiUrl = "http://localhost:46465"

  constructor() { }

  getImagePath(imagePath:string){
    let newPath = this.apiUrl + imagePath
  }
}
