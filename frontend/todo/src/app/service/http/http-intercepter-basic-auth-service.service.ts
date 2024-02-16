import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBasicAuthServiceService implements HttpInterceptor{

  constructor() { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let username='ramya'
    let password='dummy'
    let basicAuthHeaderString = 'Basic '+window.btoa(username + ':' + password)
    request=request.clone({
      setHeaders:{
        Authorization : basicAuthHeaderString
      }
    })
    return next.handle(request);
  }
}