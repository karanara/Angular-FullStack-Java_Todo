import { CommonModule, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';
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
  imports: [CommonModule,NgIf],
  templateUrl: './list-todos.component.html',
  styleUrl: './list-todos.component.css'
})
export class ListTodosComponent implements OnInit {
 todos: any = [];
 message: string | undefined;
 
 ngOnInit() {
     this.refreshTodos();
 }
 refreshTodos(){
  this.todoService.retreiveAllTodos('ramya').subscribe(
    response=>{
      this.todos= response;
    }
   )
 }
 constructor(private todoService:TodoDataService,private router:Router){}
 deleteTodo(id:number){
     this.todoService.deleteTodo('ramya',id).subscribe(
      response=>{
        this.message=`Todo of ${id} has been deleted Successfully`;
        this.refreshTodos();
      }
     )
 }
 updateTodo(id:number){
   this.router.navigate(['todos',id]);
 }
 addTodo(){
  this.router.navigate(['todos',-1]);
 }
}
