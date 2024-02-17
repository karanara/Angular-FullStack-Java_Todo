import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from '../../app.constants';
export class HelloWorldBean{
  constructor(public message:string){}
}
@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http:HttpClient) { }
  executeHelloWorldBeanService(){
    return this.http.get<HelloWorldBean>("http://localhost:8080/hello-world-bean");
  }
  executeHelloWorldBeanServiceWithParam(name: any){
   /* let basicAuthHeaderString= this.createBasicAuthenticationHttpHeader();
    let headers= new HttpHeaders({
      Authorization : basicAuthHeaderString
    });*/
    return this.http.get<HelloWorldBean>(`${API_URL}/hello-world-bean/ +${name}`);//{headers});
  }
  /*createBasicAuthenticationHttpHeader(){
    let username='ramya'
    let password='dummy'
    let basicAuthHeaderString = 'Basic '+window.btoa(username + ':' + password)
    return basicAuthHeaderString;
  }*/
}
