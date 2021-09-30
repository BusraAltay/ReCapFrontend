import { RentaldetailService } from './../../services/rentaldetail.service';
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
  carId:number;
  
  constructor(private cardetailService:CardetailService,
    private carImageService:CarimageService,
    private rentalDetailService:RentaldetailService,
    private toastrService:ToastrService,
    private activatedRoute:ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
       if(params["carId"] && params["rentDate"] && params["deliveryDate"]){
         this.getCheckRentAvailable(params["carId"],params["rentDate"],params["deliveryDate"])
       }else{
      this.getCurrentCarDetails(params["carId"]);
     }
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

  getCheckRentAvailable(carId:number, rentDate:Date, deliveryDate:Date){
    
    return this.cardetailService.getCheckRentAvailable(carId,rentDate,deliveryDate);
  }

  rentCar(cardetail:CarDetails){
    
    this.toastrService.success("Araba kiralandı",cardetail.brandName)
  }

  // rentCar(rental:Rental){
  //   this.cardetailService.rentCar(rental).subscribe(response=>{
      
  //   })
  //   this.toastrService.success("Araba kiralandı",rental)
  // }

}
