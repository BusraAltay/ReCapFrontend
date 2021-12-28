import { CartService } from './../../services/cart.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RentaldetailService } from './../../services/rentaldetail.service';
import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from './../../services/local-storage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  // DateTimeNow: Date = new Date();
  // rentDate: Date = this.DateTimeNow;
  // deliveryDate: Date = this.DateTimeNow;
  carId: number;
  userId: number = 0;
  customerId: number;
  email = this.localStorageService.get('email');

  constructor(
    private rentalDetailService: RentaldetailService,
    private toastrService: ToastrService,
    private userService: UserService,
    private localStorageService: LocalStorageService,
    private activatedRoute:ActivatedRoute,
    private cartService:CartService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
     this.carId = params["carId"];
    })
    
    this.getUserByEmail();
  }

  Payment(userId:number){
    this.cartService.payment(userId).subscribe(response=>{
      this.toastrService.success(response.message)
    })
  }

  getUserByEmail() {
    if (this.email) {
      this.userService.getUserByEmail(this.email).subscribe((response) => {
        this.userId = response.id;
        console.log('userId: ' + this.userId);
        this.localStorageService.set('userId', this.userId);
      });
    }
  }
}
