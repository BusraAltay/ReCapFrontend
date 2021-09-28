import { CarimageService } from './../../services/carimage.service';
import { CardetailService } from './../../services/cardetail.service';
import { CarDetails } from './../../models/cardetails';
import { Car } from './../../models/car';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cardetails',
  templateUrl: './cardetails.component.html',
  styleUrls: ['./cardetails.component.css']
})
export class CardetailsComponent implements OnInit {

  cardetails:CarDetails[] = [];
  car:Car[] = [];
  apiUrl = "http://localhost:46465"
  defaultImagePath = "/Images/default.jpg"
  currentCar: Car;
  dataLoaded = false;
  DateTimeNow: Date = new Date();
  rentDate: Date = this.DateTimeNow;
  deliveryDate: Date = this.DateTimeNow;
  
  constructor(private cardetailService:CardetailService,
    private carImageService:CarimageService,
    private toastrService:ToastrService,
    private activatedRoute:ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      this.getCurrentCarDetails(params["carId"]);
    })
  }
  
  getCurrentCarDetails(carId:number){
    this.cardetailService.getCurrentCarDetails(carId).subscribe(response=>{
      this.cardetails = response.data;
      this.dataLoaded = true;
    })
  }

  getImagePath(imagePath:string){
    return this.carImageService.apiUrl + imagePath
  }

  setCurrentCar(car:Car){
    this.currentCar = car;
  }

  addToRent(cardetail:CarDetails){
    
    this.toastrService.success("Araba kiralandı",cardetail.brandName)
  }

}
