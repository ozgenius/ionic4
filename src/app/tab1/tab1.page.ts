import { Component } from '@angular/core';
import { throws } from 'assert';
import { throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  public createEmail: string;
  public createPassword: string;
  public signInEmail: string;
  public signInPassword: string;
  public jwt: string;

  constructor(private http: HttpClient){

  }

  createAccount(){

    let credentials = {
      email: this.createEmail,
      password: this.createPassword
    }

    this.http.post('http://localhost:3000/users', credentials).subscribe((res) => {
      console.log(res);
    });

  }

  signIn(){

    let credentials = {
      email: this.signInEmail,
      password: this.signInPassword
    }

    this.http.get('http://localhost:3000/auth/token').subscribe((res: any) => {
      console.log(res);

      // NOTE: This is just for testing, typically you would store the JWT in local storage and retrieve from there
      this.jwt = res.accessToken;
    });

  }

  testRoute(){

    console.log(this.jwt);
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.jwt)

    this.http.get('http://localhost:3000/auth/data', {headers: headers}).subscribe((res) => {
      console.log(res);
    });

  }

  logout(){
    this.jwt = null;
  }



}

