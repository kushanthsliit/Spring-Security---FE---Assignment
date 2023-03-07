import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  baseUrl = 'http://localhost:8080/home/';
  constructor(private http: HttpClient) { }

  getWelcomePage(){
    return this.http.get<any>(this.baseUrl + 'welcome');
  }

  login(credencials : any){
    return this.http.post<any>(this.baseUrl + 'authenticate', credencials,
      {headers : new HttpHeaders().set('Content-Type', 'application/json')});
  }

  sentOtp(email){
    return this.http.post<any>(this.baseUrl + 'sendPasswordResetToken?email=' + email ,
      {headers : new HttpHeaders().set('Content-Type', 'application/json')});
  }

  verifyOtp(otp){
    return this.http.get<any>(this.baseUrl + 'verifyToken?token=' + otp ,
      {headers : new HttpHeaders().set('Content-Type', 'application/json')});
  }

  resetPassword(id, password){
    return this.http.post<any>(this.baseUrl + 'resetPassword?userId=' + id + '&newPassword=' + password ,
      {headers : new HttpHeaders().set('Content-Type', 'application/json')});
  }
}
