import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  public isLoggedIn : boolean;
  public loggedInData : any;

  constructor() { }
}
