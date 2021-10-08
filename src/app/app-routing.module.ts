import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { RentaldetailsComponent } from './components/rentaldetails/rentaldetails.component';
import { CarComponent } from './components/car/car.component';
import { CardetailsComponent } from './components/cardetails/cardetails.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { LoginComponent } from './components/login/login.component';
import { LoginGuard } from './guard/login.guard';
import { CarUpdateComponent } from './components/car-update/car-update.component';
import { CarListComponent } from './components/car-list/car-list.component';
import { BrandListComponent } from './components/brand-list/brand-list.component';
import { BrandUpdateComponent } from './components/brand-update/brand-update.component';
import { ColorAddComponent } from './components/color-add/color-add.component';
import { ColorListComponent } from './components/color-list/color-list.component';
import { ColorUpdateComponent } from './components/color-update/color-update.component';

const routes: Routes = [
  {path:"", pathMatch:"full", component:CarComponent},
  {path:"cars", component:CarComponent},
  {path:"cars/brand/:brandId", component:CarComponent},
  {path:"cars/color/:colorId", component:CarComponent},
  {path:"cars/brand/:brandId/color/:colorId", component:CarComponent},
  {path:"cars/add", component:CarAddComponent},
  // {path:"cars/add", component:CarAddComponent, canActivate:[LoginGuard]},
  {path:"cars/list", component:CarListComponent},
  {path:"cars/update/:carId", component:CarUpdateComponent},

  {path:"brands/add", component:BrandAddComponent},
  {path:"brands/list", component:BrandListComponent},
  {path:"brands/update/:id", component:BrandUpdateComponent},

  {path:"colors/add", component:ColorAddComponent},
  {path:"colors/list", component:ColorListComponent},
  {path:"colors/update/:id", component:ColorUpdateComponent},

  {path:"cardetails", component:CardetailsComponent},
  {path:"cardetails/car/:carId", component:CardetailsComponent},

  {path:"rentaldetails", component:RentaldetailsComponent},
  {path:"rentaldetails/car/:carId/rentDate/:rentDate/deliveryDate/:deliveryDate",
  component:CardetailsComponent},

  {path:"cart", component:CartComponent},

  {path:"login", component:LoginComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
