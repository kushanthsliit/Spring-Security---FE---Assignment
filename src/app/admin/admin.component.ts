import { Component, OnInit } from '@angular/core';
import {SharedService} from '../services/shared.service';
import {AdminService} from '../services/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public isLoggedIn : boolean;
  public loggedInData : any;
  adminMsg : String;

  constructor(private dataService: SharedService, private adminService : AdminService) { }

  ngOnInit(): void {
    this.isLoggedIn = this.dataService.isLoggedIn;
    this.loggedInData = this.dataService.loggedInData;
    console.log('Jwt token on Admin Component : ',this.loggedInData.jwtToken)
    this.getUserMsg()
  }

  getUserMsg(){
    this.adminService.getAdminPage(this.loggedInData.jwtToken).subscribe(data => {
      this.adminMsg = data
      console.log('get Admin msg : ',data)
    });
  }

}
