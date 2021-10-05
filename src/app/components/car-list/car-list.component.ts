import { CardetailService } from './../../services/cardetail.service';
import { CarDetails } from './../../models/cardetails';
import { CarService } from './../../services/car.service';
import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  cars:Car[] = [];
  cardetails:CarDetails[]=[];
  dataLoaded = false;
  currentCar:Car;

  constructor(private carservice:CarService,
    private cardetailService:CardetailService) { }

  ngOnInit(): void {
    this.getCarDetails();
  }

  getCarDetails(){
    this.cardetailService.getCarDetails().subscribe(response=>{
      this.cardetails = response.data;
      this.dataLoaded = true;
    })
  }

  // getCars(){
  //   this.carservice.getAll().subscribe(response=>{
  //     this.cars = response.data;
  //     this.dataLoaded = true;
  //   })
  // }  

}
