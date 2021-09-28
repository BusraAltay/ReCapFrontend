import { CarDetails } from './../../models/cardetails';
import { CardetailService } from './../../services/cardetail.service';
import { Car } from './../../models/car';
import { CarService } from './../../services/car.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarimageService } from 'src/app/services/carimage.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  cardetails:CarDetails[] = [];
  apiUrl = "http://localhost:46465"
  defaultImagePath = "/Images/default.jpg"
  dataLoaded = false;
  filterText=""
 
  constructor(private cardetailService:CardetailService,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
       if(params["brandId"] && params["colorId"]){
         this.getCarsByFilter(params["brandId"],params["colorId"])
       }else if(params["colorId"]){
        this.getCarDetailsByColor(params["colorId"])
      }else if(params["brandId"]){
        this.getCarDetailsByBrand(params["brandId"])
      }else{
        this.getCarDetails()
      }
    })
  }

  getCarDetails(){
    this.cardetailService.getCarDetails().subscribe(response=>{
      this.cardetails = response.data;
      this.dataLoaded = true;
    })
  }

  getCarDetailsByBrand(brandId:number){
    this.cardetailService.getCarDetailsByBrand(brandId).subscribe(response=>{
      this.cardetails = response.data;
      this.dataLoaded = true;
    })
  }

  getCarDetailsByColor(colorId:number){
    this.cardetailService.getCarDetailsByColor(colorId).subscribe(response=>{
      this.cardetails = response.data;
      this.dataLoaded = true;
    })
  }

  getCurrentCarDetails(carId:number){
    this.cardetailService.getCurrentCarDetails(carId).subscribe(response=>{
      this.cardetails = response.data;
      this.dataLoaded = true;
    })
  }
  
  getImagePath(imagePath:string){
    return this.apiUrl + imagePath
  }

   getCarsByFilter(brandId: number, colorId: number) {
     this.cardetailService
       .getCarsByFilter(brandId, colorId)
       .subscribe((response) => {
         this.cardetails = response.data;
         this.dataLoaded = true;
       });
   }
}
