import { ToastrService } from 'ngx-toastr';
import { ColorService } from './../../services/color.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-color-add',
  templateUrl: './color-add.component.html',
  styleUrls: ['./color-add.component.css']
})
export class ColorAddComponent implements OnInit {

  colorAddForm:FormGroup;

  constructor(private formBuilder:FormBuilder,
    private colorService:ColorService,
    private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.createColorAddForm();
  }

  createColorAddForm(){
    this.colorAddForm = this.formBuilder.group({
      name:["",Validators.required]
    })
  }

  add(){
    if (this.colorAddForm.valid){
      let carModel = Object.assign({},this.colorAddForm.value);
      this.colorService.add(carModel).subscribe(data=>{
        this.toastrService.success(data.message,"Başarılı")
        console.log(data)
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
}
