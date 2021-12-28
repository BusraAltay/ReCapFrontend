import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CardetailService } from './../../services/cardetail.service';
import { CarDetails } from './../../models/cardetails';
import { CarService } from './../../services/car.service';
import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css'],
})
export class CarListComponent implements OnInit {
  cars: Car[] = [];
  cardetails: CarDetails[] = [];
  dataLoaded = false;
  carId: number;

  constructor(
    private carService: CarService,
    // private cardetailService:CardetailService,
    private toastrService: ToastrService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.getCars();
      // this.getCurrentCar(params["carId"])
    });
  }

  // getCarDetails(){
  //   this.cardetailService.getCarDetails().subscribe(response=>{
  //     this.cardetails = response.data;
  //     this.dataLoaded = true;
  //   })
  // }

  getCars() {
    this.carService.getAll().subscribe(response => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }

  delete(car: Car) {
    this.carService.delete(car).subscribe(response => {
        this.toastrService.success(response.message, 'Başarılı');
        // console.log(response.message);
        console.log(car);
      },dataError => {
        if (dataError.error.Errors.length > 0) {
          for (let i = 0; i < dataError.error.Errors.length; i++) {
            this.toastrService.error(
              dataError.error.Errors[i].ErrorMessage,
              'Doğrulama hatası'
            );
          }
        }
      }
    );
  }
}
