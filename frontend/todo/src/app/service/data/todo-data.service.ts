import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../../list-todos/list-todos.component';
@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http :HttpClient) { }
  retreiveAllTodos(username: any){
    return this.http.get<Todo>(`http://localhost:8080/users/${username}/todos`)
  }
}
