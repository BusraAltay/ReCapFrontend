import { Brand } from './../../models/brand';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BrandService } from 'src/app/services/brand.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brand-update',
  templateUrl: './brand-update.component.html',
  styleUrls: ['./brand-update.component.css']
})
export class BrandUpdateComponent implements OnInit {

  brandUpdateForm:FormGroup;
  brands:Brand[]=[];
  
  constructor(private brandService:BrandService,
    private toastrService:ToastrService,
    private activatedRoute:ActivatedRoute,
    private router:Router,
    private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      this.getCurrentBrand(params["id"])
      this.createBrandUpdateForm()
    })
  }

  createBrandUpdateForm(){
    this.brandUpdateForm = this.formBuilder.group({
      id:["",Validators.required],
      name:["",Validators.required],
    })
  }

  getCurrentBrand(id:number){
    this.brandService.getCurrentBrand(id).subscribe(response=>{
      this.brands = response.data;
    })
  }

  update(){
    if (this.brandUpdateForm.valid){
      let brandModel = Object.assign({},this.brandUpdateForm.value);
      this.brandService.update(brandModel).subscribe(response=>{
        this.toastrService.success(response.message,"Başarılı")
        console.log(brandModel)
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

  goToBrandList(){
    this.router.navigate(['./brands/list']);
  }
}
