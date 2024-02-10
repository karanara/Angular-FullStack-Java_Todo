import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WelcomeComponent } from '../welcome/welcome.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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
 constructor(private router:Router){
 }
 ngOnInit(){

 }
 handleLogin(){
  if(this.username==='ramya' && this.password==='password'){
    this.router.navigate(['welcome',this.username]);
    this.invalidLogin=false;
  }
  else{
    this.invalidLogin=true;
  }
 }
}
