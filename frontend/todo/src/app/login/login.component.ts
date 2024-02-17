import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WelcomeComponent } from '../welcome/welcome.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { BasicAuthenticationService } from '../service/http/basic-authentication.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [WelcomeComponent,CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
username: string = 'ramya';
  password: string = '';
  errorMessage: string = 'Invalid Credentials';
  invalidLogin: boolean = false;
 constructor(private router:Router,private hardcodedAuthenticationService:HardcodedAuthenticationService,
  private basicAuthenticationService:BasicAuthenticationService){
 }
 ngOnInit(){

 }
 handleLogin(){
  if(this.hardcodedAuthenticationService.authenticate(this.username,this.password)){
    this.router.navigate(['welcome',this.username]);
    this.invalidLogin=false;
  }
  else{
    this.invalidLogin=true;
  }
 }
 handleBasicLogin(){
  this.basicAuthenticationService.executeBasicAuthenticationService(this.username,this.password)
  .subscribe(
    data=>{
      this.router.navigate(['welcome',this.username]);
      this.invalidLogin=false;
    },
    error=>{
      this.invalidLogin=true;
    }
  )  
 }
}
