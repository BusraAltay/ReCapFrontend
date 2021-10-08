import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  goToCarList(){
    this.router.navigate(['./cars/list']);
  }

  goToCarAdd(){
    this.router.navigate(['./cars/add']);
  }

  goToBrandList(){
    this.router.navigate(['./brands/list']);
  }

  goToBrandAdd(){
    this.router.navigate(['./brands/add']);
  }
  
  goToColorList(){
    this.router.navigate(['./colors/list']);
  }

  goToColorAdd(){
    this.router.navigate(['./colors/add']);
  }
}
