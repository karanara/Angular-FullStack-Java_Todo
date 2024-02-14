import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit{
 // isUserLoggedIn : boolean=false ;
  constructor(public hardcodedAuthenticationService: HardcodedAuthenticationService){}
   ngOnInit() {
       //this.isUserLoggedIn=this.hardcodedAuthenticationService.isUserLoggedIn();
   }
}
