import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Environment } from '../../Environment/environment';
import { CookieService } from 'ngx-cookie-service';

interface UserAuth{
  userId : Number,
  roleId : Number,
  token : string
}
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private Http : HttpClient,private cookieService:CookieService) { }


  UserLogin(model:any):Observable<any>{
    return this.Http.post(`${Environment.BASEURL}/User/Login`,model,{withCredentials:true,})
  }

  GetUserLoginInfo(): UserAuth | null {
    const userAuthJson = this.cookieService.get('UserAuth');
    if (userAuthJson) {
      return JSON.parse(userAuthJson) as UserAuth;
    }
    return null; 
  }
}
