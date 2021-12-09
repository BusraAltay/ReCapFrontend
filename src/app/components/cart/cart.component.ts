import { ToastrService } from 'ngx-toastr';
import { RentaldetailService } from './../../services/rentaldetail.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  DateTimeNow: Date = new Date();
  rentDate: Date = this.DateTimeNow;
  deliveryDate: Date = this.DateTimeNow;
  carId:number;
  customerId:number;

  constructor(private rentalDetailService:RentaldetailService,
    private toastrService:ToastrService) { }

  ngOnInit(): void {
    
  }

  // rentCar(){
  //   let rental = {
  //     carId: this.carId,
  //     customerId: this.customerId,
  //     rentDate: new Date(this.rentDate),
  //     deliveryDate: new Date(this.deliveryDate)
  //     };
  //   this.rentalDetailService.rentCar(rental).subscribe(data=>{
  //     this.toastrService.success(data.message,"Başarılı")
  //     console.log("carId: " + this.carId)
  //   })
  //  //  ,error =>{
  //  //   this.toastrService.error(error.message);
     
  //  //  })
  //   //this.localStorageService.remove("carId");
  // }

}
