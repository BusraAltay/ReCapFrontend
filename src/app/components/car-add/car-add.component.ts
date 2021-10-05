import { ToastrService } from 'ngx-toastr';
import { CarService } from './../../services/car.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css']
})
export class CarAddComponent implements OnInit {
  carAddForm:FormGroup;

  constructor(private formBuilder:FormBuilder,
    private carService:CarService,
    private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.createCarAddForm();
  }

  createCarAddForm(){
    this.carAddForm = this.formBuilder.group({
      brandId:["",Validators.required],
      colorId:["",Validators.required],
      modelYear:["",Validators.required],
      dailyPrice:["",Validators.required],
      description:["",Validators.required]
    })
  }

  add(){
    if (this.carAddForm.valid){
      let carModel = Object.assign({},this.carAddForm.value);
      this.carService.add(carModel).subscribe(data=>{
        this.toastrService.success(data.message,"Başarılı")
        console.log(data)
      },dataError=>{
        if(dataError.error.Errors.length > 0){
          for (let i = 0; i < dataError.error.Errors.length; i++) {
            this.toastrService.error(dataError.error.Errors[i].ErrorMessage,"Doğrulama hatası")
          }
        }
      })
    }else{
      this.toastrService.error("Form eksik","Dikkat!")
    }
  }

}
