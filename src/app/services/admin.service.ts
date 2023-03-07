import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  baseUrl = 'http://localhost:8080/admin/';
  constructor(private http: HttpClient) {
  }

  getAdminPage(token){
    let headers= new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', 'Bearer '+ token)
      .set('Access-Control-Allow-Origin', '*')
    console.log('headers...: ',headers)
    return this.http.get<any>(this.baseUrl + 'admin-msg',{headers: headers});
  }
}
