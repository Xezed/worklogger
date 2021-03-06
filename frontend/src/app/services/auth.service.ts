import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { tokenNotExpired, JwtHelper } from 'angular2-jwt/angular2-jwt';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
  currentUser: any;

  constructor(private http: Http) {
    let token = localStorage.getItem('token');
    if (token) {
      let jwt = new JwtHelper();
      this.currentUser = jwt.decodeToken(token);
    }
  }

  registration(credentials){
    return this.http.post('http://127.0.0.1:8000/auth/registration/', credentials)
      .map(response => {
        let result = response.json();

        console.log(result)
      })
  }

  login(credentials) {
   return this.http.post('http://127.0.0.1:8000/auth/login/', credentials)
    .map(response => {
      let result = response.json();

      if (result && result.token) {
        localStorage.setItem('token', result.token);

        let jwt = new JwtHelper();
        this.currentUser = jwt.decodeToken(localStorage.getItem('token'));

        return true;
      }
      else return false;
    });
  }

  logout() {
    localStorage.removeItem('token');
    this.currentUser = null;
  }

  isLoggedIn() {
    return tokenNotExpired('token');
  }
}
