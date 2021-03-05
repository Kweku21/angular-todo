import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Todo } from '../models/Todo';
import { Observable } from 'rxjs';


const  httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json',

  })
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todosurl:string = "https://jsonplaceholder.typicode.com/todos"
  todosLimit = '?_limit=4'
  constructor(private http:HttpClient) { }

  getTodos():Observable<Todo[]>{

    return this.http.get<Todo[]>(`${this.todosurl}${this.todosLimit}`)
  }

  //Toggle
  toggleCompleted(todo:Todo):Observable<any>{

    const url = `${this.todosurl}/${todo.id}`
    return this.http.put(url,todo,httpOptions)

  }

  //Add
  addTodo(todo:Todo):Observable<Todo>{

    return this.http.post<Todo>(this.todosurl,todo,httpOptions);
  }

  //Delete
  deleteTodo(todo:Todo):Observable<Todo>{
    
    const url = `${this.todosurl}/${todo.id}`
    return this.http.delete<Todo>(url, httpOptions)

  }
}
