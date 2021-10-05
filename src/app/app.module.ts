import { AuthInterceptor } from './interceptors/auth.interceptor';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './components/car/car.component';
import { NaviComponent } from './components/navi/navi.component';
import { BrandComponent } from './components/brand/brand.component';
import { ColorComponent } from './components/color/color.component';
import { CustomerComponent } from './components/customer/customer.component';
import { CardetailsComponent } from './components/cardetails/cardetails.component';
import { RentaldetailsComponent } from './components/rentaldetails/rentaldetails.component';
import { FilterPipe } from './pipes/filter.pipe';

import { ToastrModule } from 'ngx-toastr';
import { FiltercarComponent } from './components/filtercar/filtercar.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { CartComponent } from './components/cart/cart.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { LoginComponent } from './components/login/login.component';
import { CarUpdateComponent } from './components/car-update/car-update.component';
import { CarListComponent } from './components/car-list/car-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    NaviComponent,
    BrandComponent,
    ColorComponent,
    CustomerComponent,
    CardetailsComponent,
    RentaldetailsComponent,
    FilterPipe,
    FiltercarComponent,
    HomepageComponent,
    CartComponent,
    CarAddComponent,
    BrandAddComponent,
    LoginComponent,
    CarUpdateComponent,
    CarListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      positionClass: "toast-bottom-right"
    })
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS, useClass:AuthInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
