import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

// import 'rxjs/add/observable/throw';

// import 'rxjs/add/operator/do';
// import 'rxjs/add/operator/filter';
// import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Injectable()
export class AuthService {
  private BASE_URL: string = 'D:\hindiPro';
  private headers: Headers = new Headers({ 'Content-Type': 'application/json' });
  constructor(private http: Http) {
    // var obj;
    // this.getJSON().subscribe(data => obj = data, error => console.log(error));
  }

  test(): string {
    return 'working';
  }

  // login(user): Promise<any> {
  //   let url: string = `${this.BASE_URL}/login`;
  //   console.log(" login service return  ", user);
  //   return this.http.post(url, user, { headers: this.headers }).toPromise();
  // }
  // login1(user): Promise<any> {
  //   let url: string = `${this.BASE_URL}/login`;
  //   return this.http.post(url, user, { headers: this.headers }).toPromise();
  // }
  // register(user): Promise<any> {
  //   let url: string = `${this.BASE_URL}/register`;
  //   return this.http.post(url, user, { headers: this.headers }).toPromise();
  // }

 


  // this.http.get<UserResponse>('https://api.github.com/users/seeschweiler').subscribe(data => {
  //   console.log("User Login: " + data.login);
  //   console.log("Bio: " + data.bio);
  //   console.log("Company: " + data.company);
  // });
}
