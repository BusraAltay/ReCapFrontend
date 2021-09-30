import { CarAddComponent } from './components/car-add/car-add.component';
import { RentaldetailsComponent } from './components/rentaldetails/rentaldetails.component';
import { CarComponent } from './components/car/car.component';
import { CardetailsComponent } from './components/cardetails/cardetails.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';

const routes: Routes = [
  {path:"", pathMatch:"full", component:CarComponent},
  // {path:"cardetails", component:CardetailsComponent},
  // {path:"cardetails/brand/:brandId", component:CardetailsComponent},
  {path:"cars", component:CarComponent},
  {path:"cars/brand/:brandId", component:CarComponent},
  {path:"cars/color/:colorId", component:CarComponent},
  {path:"cars/brand/:brandId/color/:colorId", component:CarComponent},
  {path:"cars/add", component:CarAddComponent},
  {path:"cardetails", component:CardetailsComponent},
  {path:"cardetails/car/:carId", component:CardetailsComponent},
  {path:"rentaldetails", component:RentaldetailsComponent},
  {path:"rentaldetails/car/:carId/rentDate/:rentDate/deliveryDate/:deliveryDate",
  component:CardetailsComponent},
  {path:"cart", component:CartComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
