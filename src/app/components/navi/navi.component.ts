import { UserService } from './../../services/user.service';
import { User } from './../../models/user';
import { ToastrService } from 'ngx-toastr';
import { LocalStorageService } from './../../services/local-storage.service';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css'],
})
export class NaviComponent implements OnInit {
  user: User = new User();
  email = this.localStorageService.get("email");

  constructor(
    private router: Router,
    private authService: AuthService,
    private localStorageService: LocalStorageService,
    private toastrService: ToastrService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.checkToLogin();
    this.checkToEmail();
    this.getUserByEmail();
  }
  
  checkToLogin() {
    if (this.authService.isAuthenticated()) {
      return true;
    } else {
      return false;
    }
  }

  logOut() {
    this.localStorageService.clean();
    this.toastrService.success("Başarıyla çıkış yapıldı","Başarılı");
    this.router.navigate(['/']);
  }

  checkToEmail() {
    if (this.localStorageService.get('email')) {
      return true;
    } else {
      return false;
    }
  }

  getUserByEmail() {
    if (this.email) {
      this.userService.getUserByEmail(this.email).subscribe(response => {
        this.user = response;
      });
    }
  }

  goToCarList() {
    this.router.navigate(['./cars/list']);
  }

  goToCarAdd() {
    this.router.navigate(['./cars/add']);
  }

  goToBrandList() {
    this.router.navigate(['./brands/list']);
  }

  goToBrandAdd() {
    this.router.navigate(['./brands/add']);
  }

  goToColorList() {
    this.router.navigate(['./colors/list']);
  }

  goToColorAdd() {
    this.router.navigate(['./colors/add']);
  }
}
