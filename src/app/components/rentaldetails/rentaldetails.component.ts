import { RentaldetailService } from './../../services/rentaldetail.service';
import { RentalDetails } from './../../models/rentaldetails';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rentaldetails',
  templateUrl: './rentaldetails.component.html',
  styleUrls: ['./rentaldetails.component.css']
})
export class RentaldetailsComponent implements OnInit {

  rentaldetails:RentalDetails[] = [];
  dataLoaded = false;
  
  constructor(private rentaldetailService:RentaldetailService) { }

  ngOnInit(): void {
    this.getRentalDetails();
  }

  getRentalDetails(){
    this.rentaldetailService.getRentalDetails().subscribe(response=>{
      this.rentaldetails = response.data;
      this.dataLoaded = true;
    })
  }

  // addRental(rentaldetails:RentalDetails){
    
  // }

}
