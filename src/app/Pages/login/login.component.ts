import { Component, OnInit } from '@angular/core';
import { UserService } from '../../Services/user.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgClass } from '@angular/common';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NgClass,ReactiveFormsModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  UserForm :FormGroup 
  formSubmitted:boolean = false
  IsLoading:boolean = false
  error:any

  constructor(private userService : UserService,private CookieService : CookieService,private router:Router){}
  
  ngOnInit(): void {
    this.UserForm = new FormGroup({
      email: new FormControl(null,[Validators.required,Validators.email]),
      password:new FormControl(null,[Validators.required])
    })
  }
  LoginUser(){
    this.IsLoading = true
    this.userService.UserLogin(this.UserForm.value).subscribe({
      next:(res)=>{
        this.IsLoading = false
        this.CookieService.set("UserAuth",JSON.stringify(res.userAuth))
        this.router.navigate(["/"])
      },
      error:(err)=>{
        this.IsLoading = false
        this.error = err.error.message
      }
    })
  }

  isFieldInvalid(field: string) {
    return (
      !this.UserForm.get(field)?.valid &&    // Check if the field is invalid (not valid)
      (this.UserForm.get(field)?.touched || this.formSubmitted) // Check if the field is touched or form is submitted
    );
  }
}
