import { ColorService } from './../../services/color.service';
import { Color } from './../../models/color';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-list',
  templateUrl: './color-list.component.html',
  styleUrls: ['./color-list.component.css']
})
export class ColorListComponent implements OnInit {

  colors:Color[]=[];
  dataLoaded = false;

  constructor(private colorService:ColorService,
    private toastrService:ToastrService,
    private activatedRoute:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      this.getColors();
      // this.getCurrentCar(params["carId"])
      })
  }

  getColors(){
    this.colorService.getColors().subscribe(response=>{
      this.colors = response.data;
      this.dataLoaded = true;
    })
  }

  delete(color:Color){
    this.colorService.delete(color).subscribe(response=>{
      this.toastrService.success(response.message,"Başarılı")
      console.log(response.message)
      console.log(color)
    }
    ,dataError=>{
      if(dataError.error.Errors.length > 0){
        for (let i = 0; i < dataError.error.Errors.length; i++) {
          this.toastrService.error(dataError.error.Errors[i].ErrorMessage,"Doğrulama hatası")
        }
      }
    })
  }

  goToColorList(){
    this.router.navigate(['./colors/list']);
  }
}
