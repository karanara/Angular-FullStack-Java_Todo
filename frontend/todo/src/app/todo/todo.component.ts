import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Todo } from '../list-todos/list-todos.component';
import { ActivatedRoute, Router } from '@angular/router';
import { pipe } from 'rxjs';
import { DatePipe, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [NgIf, FormsModule, DatePipe],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent implements OnInit{
  id: number =0;
  todo: Todo = new Todo(this.id, 'ramya','', false, new Date());
  ngOnInit() {
    this.id= this.route.snapshot.params['id'];
    if(this.id!=-1){
      this.todoService.retrieveTodo('ramya',this.id).subscribe(
        data=>this.todo = data
      )
    }
    
  }
  constructor(private todoService:TodoDataService,private route:ActivatedRoute,private router:Router){}
  saveTodo(){
    if(this.id == -1){
      this.todoService.createTodo('ramya',this.todo).subscribe(
        data=>this.router.navigate(['todos'])
     )
    }
    else{
      this.todoService.updateTodo('ramya',this.id,this.todo).subscribe(
        data=>this.router.navigate(['todos'])
     ) 
    }
    
  }
}
