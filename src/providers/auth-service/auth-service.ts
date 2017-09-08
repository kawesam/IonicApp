import { Injectable } from '@angular/core';
import { Http ,Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

let apiUrl = 'http://localhost:3000/api/';


/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class AuthServiceProvider {

  constructor(public http: Http) {
    console.log('Hello AuthServiceProvider Provider');
  }

  //add users
  register(data){
    // return new Promise((resolve,reject) =>{
      let headers = new Headers();
    headers.append('Content-Type', undefined);

     return this.http.post(apiUrl + 'register',JSON.stringify(data),{headers : headers})
        .map(res=>{
          console.log(res.json());
        },(err) =>{
          console.log(err);
        });
    // });
  }

}
