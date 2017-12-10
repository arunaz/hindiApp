import { Injectable } from '@angular/core';
import { Headers, Http, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class CustomService {

  private BASE_URL: string = 'http://localhost:8081/app/master/';
  private headers: Headers = new Headers({
    // 'Access-Control-Allow-Headers': 'X-Requested-With,contenttype',
    // 'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    // 'Access-Control-Allow-Origin': 'http://localhost:8080',
    // 'Access-Control-Allow-Credentials': true
    // 'Content-Type': 'application/json', 
    // 'Access-Control-Allow-Origin': '*',
    // 'Access-Control-Allow-Methods': 'POST,GET,PUT,DELETE',
  });
  constructor(private http: Http) { }
  data;

  /* 
  ***************************************
  Description : Service for Stud Register
  ***************************************
  */
  _studRegister(user): Promise<any> {
    let url: string = this.BASE_URL+"studentInfo";
    console.log("arun req")
    return this.http.post(url, user, { headers: this.headers }).toPromise();
  }

  /* 
  ***************************************
  Description : Service for Stud View
  ***************************************
  */
  _studView(user): Observable<any> {
    this.BASE_URL = 'http://localhost:8081/app/master/' + 'h_level/'+user.hindi+'/a_level/'+user.abacus;

    let url: string = `${this.BASE_URL}`;
    console.log(' _stdView ', user.abacus, 'valus===>', user.hindi);
    return this.http.get(url)
      .map(this.extractData)
      .catch(this.handleError);
  }


  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }

  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
    error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.log(errMsg);
    return Observable.throw(errMsg);
  }

  test(formData) {
    console.log(" service file  ", formData)
    // let apiUrl = 'assets/data.txt';
    // try {

    // const restService = this.http.get(apiUrl)
    //   .subscribe(res => {
    //     this.data = res.json()
    //   });
    // console.log(' restservice ', restService)


    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('uName', "arunmuhesh");
    urlSearchParams.append('std', "college");
    this.http.post(this.BASE_URL, urlSearchParams).subscribe(
      data => {
        alert('ok');
      },
      error => {
        console.log(JSON.stringify(error.json()));
      }
    )


    // } catch (error) {
    //   console.log(' fuck ===> ', error)
    // }
    //  = this.http.get("../data/navItems.json")
    // .map(res => res.json())
    // .do(data => console.log(data));
    //This is optional, you can remove the last line 
    // if you don't want to log loaded json in 
    // console.
  }


  //   return this.http.get(apiUrl)
  //     .map((response: Response) => {
  //       console.log(' inside th esererea ')
  //       const data = response.json();
  //       return data;
  //     });
  // }
}
