import { Component, OnInit } from '@angular/core';
import {SharedService} from '../services/shared.service';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public isLoggedIn : boolean;
  public loggedInData : any;
  userMsg : String;

  constructor(private dataService: SharedService, private userService : UserService) { }

  ngOnInit(): void {
    this.isLoggedIn = this.dataService.isLoggedIn;
    this.loggedInData = this.dataService.loggedInData;
    console.log('Jwt token on User Component : ',this.loggedInData.jwtToken)
    this.getUserMsg()
  }

  getUserMsg(){
    this.userService.getUserPage(this.loggedInData.jwtToken).subscribe(data => {
      this.userMsg = data
      console.log('get User msg : ',data)
    });
  }

}
