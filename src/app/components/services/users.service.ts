import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private _HttpClient: HttpClient  )  {

  }

  sendData(userData:object):Observable<any>
  {
return this._HttpClient.post
(
  'http://upskilling-egypt.com:3001/contact',
  userData
);
  }
}
