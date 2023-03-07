import {Component, OnInit} from '@angular/core';
import {SharedService} from './services/shared.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-app';

  constructor(public dataService : SharedService, private router: Router) { }

  isLoggedIn : boolean;

  ngOnInit(){
    this.isLoggedIn = this.dataService.isLoggedIn;
  }

  logout(){
    this.router.navigate(['']).then(r => {
      this.isLoggedIn = false;
      this.dataService.isLoggedIn = false;
    });
  }
}
