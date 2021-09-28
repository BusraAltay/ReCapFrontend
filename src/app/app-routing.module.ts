import { RentaldetailsComponent } from './components/rentaldetails/rentaldetails.component';
import { CarComponent } from './components/car/car.component';
import { CardetailsComponent } from './components/cardetails/cardetails.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"", pathMatch:"full", component:CarComponent},
  // {path:"cardetails", component:CardetailsComponent},
  // {path:"cardetails/brand/:brandId", component:CardetailsComponent},
  {path:"cars", component:CarComponent},
  {path:"cars/brand/:brandId", component:CarComponent},
  {path:"cars/color/:colorId", component:CarComponent},
  {path:"cars/brand/:brandId/color/:colorId", component:CarComponent},
  {path:"cardetails", component:CardetailsComponent},
  {path:"cardetails/car/:carId", component:CardetailsComponent},
  {path:"rentaldetails", component:RentaldetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
