import { CarDetails } from './../../models/cardetails';
import { CardetailService } from './../../services/cardetail.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CarService } from './../../services/car.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Car } from 'src/app/models/car';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-car-update',
  templateUrl: './car-update.component.html',
  styleUrls: ['./car-update.component.css']
})
export class CarUpdateComponent implements OnInit {

  carUpdateForm:FormGroup;
  cardetails:CarDetails[]=[];
  // currentCar:Car;
  // carId:number;
  // brandId:number;

  constructor(private formBuilder:FormBuilder,
    private carService:CarService,
    private cardetailService:CardetailService,
    private toastrService:ToastrService,
    private activatedRoute:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      this.getCurrentCar(params["carId"])
      this.createCarUpdateForm()
    })
  }

  getCurrentCar(carId:number){
    this.cardetailService.getCurrentCarDetails(carId).subscribe(response=>{
      this.cardetails = response.data;
    })
  }

  createCarUpdateForm(){
    this.carUpdateForm = this.formBuilder.group({
      id:["",Validators.required],
      brandId:["",Validators.required],
      colorId:["",Validators.required],
      modelYear:["",Validators.required],
      dailyPrice:["",Validators.required],
      description:["",Validators.required]
    })
  }

  update(){
    if (this.carUpdateForm.valid){
      let carModel = Object.assign({},this.carUpdateForm.value);
      this.carService.update(carModel).subscribe(response=>{
        this.toastrService.success(response.message,"Başarılı")
        console.log(carModel)
        console.log(response.message)
      }
      ,dataError=>{
        if(dataError.error.Errors.length > 0){
          for (let i = 0; i < dataError.error.Errors.length; i++) {
            this.toastrService.error(dataError.error.Errors[i].ErrorMessage,"Doğrulama hatası")
          }
        }
      }
      )
    }else{
      this.toastrService.error("Form eksik","Dikkat!")
    }
  }

  goToCarList(){
    this.router.navigate(['./cars/list']);
  }
}