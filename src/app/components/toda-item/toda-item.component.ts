import { Component, OnInit,Input,EventEmitter,Output } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import {TodoService  } from "../../services/todo.service";

@Component({
  selector: 'app-toda-item',
  templateUrl: './toda-item.component.html',
  styleUrls: ['./toda-item.component.css']
})
export class TodaItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() deleteTodo:EventEmitter<Todo> = new EventEmitter()


  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
  }

  //Set dynamic classes
  setClasses(){
    let classes = {
      todo:true,
      'is-complete':this.todo.completed,
    }

    return classes
  }

  onToggle(todo){
    //Toggle in UI
    todo.completed = !todo.completed

    //Toggle on server
    this.todoService.toggleCompleted(todo).subscribe(todo=>{
      console.log(todo)
    })

  }

  onDelete(todo){

    this.deleteTodo.emit(todo)

  }
}
