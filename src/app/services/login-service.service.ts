import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http: HttpClient) {
     
   }
  
  register(value:any){
     let url="https://api.halfpricebazar.com/v1/users";
     console.log("");
     return this.http.post(url,value)
  }
  login(value:any){
    console.log("i am in login");
    let url= "https://api.halfpricebazar.com/v1/auth/login/email";
    return this.http.post(url,value)
 }
}
