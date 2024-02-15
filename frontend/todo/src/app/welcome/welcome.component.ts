import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';
import { HelloWorldBean, WelcomeDataService } from '../service/data/welcome-data.service';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [RouterModule,FormsModule,NgIf],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent implements OnInit{
  name='';
  welcomeMessage="";
  message = "Welcome user "
  constructor(private route : ActivatedRoute,
    private service:WelcomeDataService){

  }
  ngOnInit() {
    this.name=this.route.snapshot.params['name'];
  }
  getWelcomeMessage(){
   console.log(this.service.executeHelloWorldBeanService());
   this.service.executeHelloWorldBeanServiceWithParam(this.name).subscribe(
    response=> this.handleResponseData(response),
    error=>this.handleErrorResponse(error)
   );
   
  }
  handleResponseData(response: HelloWorldBean){
    this.welcomeMessage = response.message;
   }
  handleErrorResponse(error: { error: { message: string; }; }){
    this.welcomeMessage= error.error.message;
  }

}
