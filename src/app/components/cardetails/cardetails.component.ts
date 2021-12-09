import { ColorService } from './../../services/color.service';
import { BrandService } from 'src/app/services/brand.service';
import { Brand } from 'src/app/models/brand';
import { CarService } from './../../services/car.service';
import { DatePipe } from '@angular/common';
import { Rental } from 'src/app/models/rental';
import { LocalStorageService } from './../../services/local-storage.service';
import { UserService } from './../../services/user.service';
import { CustomerService } from './../../services/customer.service';
import { Customer } from 'src/app/models/customer';
import { RentaldetailService } from './../../services/rentaldetail.service';
import { CarimageService } from './../../services/carimage.service';
import { CardetailService } from './../../services/cardetail.service';
import { CarDetails } from './../../models/cardetails';
import { Car } from './../../models/car';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Color } from 'src/app/models/color';

@Component({
  selector: 'app-cardetails',
  templateUrl: './cardetails.component.html',
  styleUrls: ['./cardetails.component.css'],
  providers: [DatePipe]
})
export class CardetailsComponent implements OnInit {

  cardetails:CarDetails[];
  car!:Car;
  apiUrl = "http://localhost:46465"
  defaultImagePath = "/Images/default.jpg"
  // currentCar: Car;
  dataLoaded = false;
  DateTimeNow: Date = new Date();
  //  rentDate: Date = this.DateTimeNow;
  //  deliveryDate: Date = this.DateTimeNow;
   rentDate: string;
   deliveryDate: string;
  // carId:number;
  customers:Customer[];
  userId:number = 0;
  customerId:number;
  email = this.localStorageService.get("email");
  minDate: string | null;
  maxDate: string | null;
  firstDateSelected: boolean = false;
  brand!:Brand;
  color:Color;
  checkRentAvailable: boolean;
  carId: number;
  rental:Rental;
  
  constructor(private cardetailService:CardetailService,
    private carImageService:CarimageService,
    private rentalDetailService:RentaldetailService,
    private toastrService:ToastrService,
    private activatedRoute:ActivatedRoute,
    private customerService:CustomerService,
    private userService:UserService,
    private localStorageService:LocalStorageService,
    private datePipe:DatePipe,
    private carService:CarService,
    private brandService:BrandService,
    private colorService:ColorService,
    private router:Router
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      //if(params["carId"] && params["rentDate"] && params["deliveryDate"]){
        //this.CheckRentAvailable(params["carId"],params["rentDate"],params["deliveryDate"])
      //}else{
       this.getCurrentCarDetails(params["carId"]);
    //   //}
    //  this.getCarById(params["carId"]);
     this.carId = params["carId"];
    })
    
    this.getUserByEmail();
    this.getCustomerByUserId();
    this.minDate = this.datePipe.transform(new Date(), "yyyy-MM-dd");
    this.maxDate = this.datePipe.transform(new Date(new Date().setFullYear(new Date()
    .getFullYear() + 1)), "yyyy-MM-dd");
  }

  rentCar(){
     this.rental = {
       carId: Number(this.carId),
       customerId: this.customerId,
       rentDate: this.rentDate,
       deliveryDate: this.deliveryDate
       };
    this.rentalDetailService.rentCar(this.rental).subscribe(data=>{
      this.toastrService.success(data.message,"Başarılı")
      console.log("carId: " + this.carId)
    })
  }

  CheckRentAvailable(carId:number, rentDate:string, deliveryDate:string){
    this.rentalDetailService.getCheckRentAvailable(carId, rentDate, deliveryDate).subscribe(response=>{
      this.checkRentAvailable = response.success;
      if (response.success) {
        this.toastrService.success(response.message)
        this.rentCar();
        this.router.navigateByUrl("/cart");
      }else{
        this.toastrService.error(response.message)
      }
    })
  }

  getCarById(carId:number){
    this.carService.getCarByDetails(carId).subscribe(response=>{
      this.car = response.data;
      console.log(response.data)
      //this.localStorageService.set("carId",carId);
      // this.getBrandById(this.car.brandId);
    })
  }

  getBrandById(brandId:number){
    this.brandService.getBranById(brandId).subscribe(response=>{
      this.brand = response.data
      // console.log(response.data)
    })
  }

  getCurrentCarDetails(carId:number){
    this.cardetailService.getCurrentCarDetails(carId).subscribe(response=>{
      this.cardetails = response.data;
      this.dataLoaded = true;
      console.log(response.data)
    })
    // this.getCustomer();
  }

  onChangeEvent(event: any) {
    this.minDate = event.target.value
    this.firstDateSelected = true
  }

  checkReturnDate() {
    if (this.deliveryDate < this.rentDate) {
      this.deliveryDate = this.rentDate
    }
  }

  getUserByEmail(){
    if (this.email) {
      this.userService.getUserByEmail(this.email).subscribe(response=>{
        this.userId = response.id;
        console.log("userId: " + this.userId)
        this.localStorageService.set("userId",this.userId);
      })
    }
  }

  getCustomerByUserId(){
    let userId = this.localStorageService.get("userId");
    this.customerService.getCustomerByUserId(parseInt(userId)).subscribe(response=>{
      this.customerId = response.id;
      console.log("customerId: " + this.customerId);
    })
  }

  getImagePath(imagePath:string){
    return this.carImageService.apiUrl + imagePath
  }

  getCustomer(){
    this.customerService.getCustomer().subscribe(response=>{
      this.customers = response.data;
      console.log(response.data);
    })
  }

}

