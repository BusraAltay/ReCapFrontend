import { Brand } from './../../models/brand';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BrandService } from 'src/app/services/brand.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.css']
})
export class BrandListComponent implements OnInit {

  brands:Brand[]=[];
  dataLoaded = false;

  constructor(private brandService:BrandService,
    private toastrService:ToastrService,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      this.getBrands();
      // this.getCurrentCar(params["carId"])
      })
  }

  getBrands(){
    this.brandService.getBrands().subscribe(response=>{
      this.brands = response.data;
      this.dataLoaded = true;
    })
  }

  delete(brand:Brand){
    this.brandService.delete(brand).subscribe(response=>{
      this.toastrService.success(response.message,"Başarılı")
      console.log(response.message)
      console.log(brand)
    }
    ,dataError=>{
      if(dataError.error.Errors.length > 0){
        for (let i = 0; i < dataError.error.Errors.length; i++) {
          this.toastrService.error(dataError.error.Errors[i].ErrorMessage,"Doğrulama hatası")
        }
      }
    })
  }

}
