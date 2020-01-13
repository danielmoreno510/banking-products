import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  url='http://localhost:3000/login'

  constructor(protected http: HttpClient) { }
  
  authentication() {
    return this.http.get(this.url);
  }

  login() {
    return this.http.post(this.url, { authentication:true });
  }

  logout() {
    return this.http.post(this.url, { authentication:false });
  }
}
