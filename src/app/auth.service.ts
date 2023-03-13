import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable, BehaviorSubject} from 'rxjs';
import jwtDecode from 'jwt-decode';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData:any =new BehaviorSubject(null);

  constructor(private _HttpClient:HttpClient,private _Router:Router) {

    if(localStorage.getItem('tokinData')!=null)
    {
      this.decodeData()
      _Router.navigate([`${localStorage.getItem('currentPage')}`])

    }
   }

  sendFormRegistr(formValue:object):Observable<any>
  {
   return this._HttpClient.post(`https://route-egypt-api.herokuapp.com/signup`,formValue)
  }
  sendFormLogin(formValue:object):Observable<any>
  {
   return this._HttpClient.post(`https://route-egypt-api.herokuapp.com/signin`,formValue)
  }
  decodeData()
  {
    this.userData.next( jwtDecode( JSON.stringify(localStorage.getItem('tokinData') ) )  ) ;
  }
}
