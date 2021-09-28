import { CarDetails } from './../../models/cardetails';
import { CardetailService } from './../../services/cardetail.service';
import { Color } from './../../models/color';
import { ColorService } from './../../services/color.service';
import { BrandService } from 'src/app/services/brand.service';
import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';

@Component({
  selector: 'app-filtercar',
  templateUrl: './filtercar.component.html',
  styleUrls: ['./filtercar.component.css'],
})
export class FiltercarComponent implements OnInit {
  brands: Brand[] = [];
  colors: Color[] = [];
  filterBrandId: number;
  filterColorId: number;
  // filterText=""

  constructor(
    private brandService: BrandService,
    private colorService: ColorService
  ) {}

  ngOnInit(): void {
    this.getBrands();
    this.getColors();
  }
  
  getColors() {
    this.colorService.getColors().subscribe((response) => {
      this.colors = response.data;
    });
  }

  getBrands() {
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response.data;
    });
  }

  routingLink() {
    if (this.filterBrandId == undefined && this.filterColorId != undefined) {
      return '/cars/color/' + this.filterColorId;
    } 
    else if (this.filterBrandId != undefined && this.filterColorId == undefined) {
      return '/cars/brand/' + this.filterBrandId;
    } 
    else if(this.filterBrandId != undefined && this.filterColorId != undefined) {
      return (
        '/cars/brand/' + this.filterBrandId + '/color/' + this.filterColorId
      );
    } else {
      return '/cars';
    }
  }
}
