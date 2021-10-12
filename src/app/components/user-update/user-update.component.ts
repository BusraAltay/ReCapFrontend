import { ToastrService } from 'ngx-toastr';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css'],
})
export class UserUpdateComponent implements OnInit {

  userForm: FormGroup;
  email:string;
  user:User = new User();
  status:string;

  constructor(
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.createProfileAddForm();
    this.email = localStorage.getItem('email');
    this.getUserByEmail();
  }

  createProfileAddForm() {
    this.userForm = this.formBuilder.group({
      id: this.user.id,
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      status: true,
    });
  }

  getUserByEmail() {
    if (this.email) {
      this.userService.getUserByEmail(this.email).subscribe(
        (response) => {
          this.user = response;
          if (response.status) {
            this.status = 'Aktif';
          } else {
            this.status = 'Aktif değil';
          }
        },
        (responseError) => {
          this.toastrService.error(responseError.error);
        }
      );
    }
  }

  update() {
    if (this.userForm.valid) {
      let profileModel = Object.assign({}, this.userForm.value);
      console.log(profileModel)
      this.userService.profileUpdate(profileModel).subscribe(
        (response) => {
          this.toastrService.success(response.message);
          console.log(response)
        },
        (responseError) => {
          this.toastrService.error(responseError.error);
        }
      );
    } else {
      this.toastrService.error('Formu Boş Bıraktınız');
    }
  }
}
