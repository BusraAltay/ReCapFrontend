import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ColorService } from './../../services/color.service';
import { Color } from './../../models/color';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-color-update',
  templateUrl: './color-update.component.html',
  styleUrls: ['./color-update.component.css']
})
export class ColorUpdateComponent implements OnInit {

  colorUpdateForm:FormGroup;
  colors:Color[]=[];
  
  constructor(private colorService:ColorService,
    private toastrService:ToastrService,
    private activatedRoute:ActivatedRoute,
    private router:Router,
    private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      this.getCurrentColor(params["id"])
      this.createColorUpdateForm()
    })
  }

  createColorUpdateForm(){
    this.colorUpdateForm = this.formBuilder.group({
      id:["",Validators.required],
      name:["",Validators.required],
    })
  }

  getCurrentColor(id:number){
    this.colorService.getCurrentColor(id).subscribe(response=>{
      this.colors = response.data;
    })
  }

  update(){
    if (this.colorUpdateForm.valid){
      let colorModel = Object.assign({},this.colorUpdateForm.value);
      this.colorService.update(colorModel).subscribe(response=>{
        this.toastrService.success(response.message,"Başarılı")
        console.log(colorModel)
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

  goToColorList(){
    this.router.navigate(['./colors/list']);
  }
}
