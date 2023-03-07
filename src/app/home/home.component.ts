import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../services/auth-service.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {SharedService} from '../services/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  welcomeMsg: any;
  loginForm: FormGroup;
  userEmailForm : FormGroup;
  loginResponse : any;
  isLoggedIn : boolean = false;
  isForgetPasswordLinkClicked : boolean = false
  userEmail : String;
  otp : String
  newPassword : String;
  isEmailSent : boolean = false;
  isOtpVerified : boolean = false;
  user : any

  constructor(private service: AuthServiceService,
              public dataService: SharedService,
              private router: Router,
              private fb: FormBuilder) {

    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.userEmailForm = this.fb.group({
      email: ['', Validators.required],
      otp: ['']
    });
  }

  ngOnInit() {
    this.getWelcomeMessage();
  }

  getWelcomeMessage() {
    this.service.getWelcomePage().subscribe(data => {
      this.welcomeMsg = data.data;
      console.log(this.welcomeMsg);
    });
  }

  onSubmit() {
    console.log(this.loginForm.value);
    this.service.login(this.loginForm.value).subscribe( data => {
      this.loginResponse = data.data;
      this.dataService.loggedInData = data.data;
      this.dataService.isLoggedIn = true;
      console.log('Login Response : ',data.data);
      if(this.loginResponse.loginType == 'USER'){
        this.router.navigate(['/userPage']).then(r => {
          this.isLoggedIn = true;
        });

      }
      else {
        this.router.navigate(['/adminPage']).then(r => {
          this.isLoggedIn = true;
        });

      }
    })
  }


  forgetPasswordClicked(){
    this.isForgetPasswordLinkClicked = true
  }

  sentOtp(){
      this.service.sentOtp(this.userEmail).subscribe(response => {
      if(response.status == 200){
        this.isEmailSent = true;
        console.log('isEmailSent : ', this.isEmailSent)
      }
    });
  }

  verifyOtp(){
    this.service.verifyOtp(this.otp).subscribe(response => {
      if(response.status == 200){
        this.isOtpVerified = true;
        this.user = response.data
        console.log('isOtpVerified : ', this.isOtpVerified)
        console.log('User : ', this.user)
      }
    });
  }

  resetPassword() {
    this.service.resetPassword(this.user.id, this.newPassword).subscribe(response => {
      if(response.status == 200){
        console.log('User : ', response)
        this.isForgetPasswordLinkClicked = false
      }
    });
  }
}
