import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent implements OnInit{
  name='';
  message = "Welcome user "
  constructor(private route : ActivatedRoute){

  }
  ngOnInit() {
    this.name=this.route.snapshot.params['name'];
  }

}
