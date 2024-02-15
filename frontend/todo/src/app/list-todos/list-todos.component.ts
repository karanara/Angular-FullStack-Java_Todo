import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
export class Todo{
  constructor(
    public id: number,
    public username:string,
    public description:string,
    public done :boolean,
    public targetDate : Date
  ){

  }
}
@Component({
  selector: 'app-list-todos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-todos.component.html',
  styleUrl: './list-todos.component.css'
})
export class ListTodosComponent implements OnInit {
 todos: any = [];
 
 ngOnInit() {
     this.todoService.retreiveAllTodos('ramya').subscribe(
      response=>{
        this.todos= response;
      }
     )
 }
 constructor(private todoService:TodoDataService){}
}
