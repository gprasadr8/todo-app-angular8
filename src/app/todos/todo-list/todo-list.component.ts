import { Component, OnInit } from '@angular/core';
import { TodoInfo } from '../models/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: TodoInfo[] = [
    new TodoInfo(1,'wakeup','wake up at 6.00 AM in the morning','Top'),
    new TodoInfo(3,'Workout','20 pushups,30 squads','Top'),
    new TodoInfo(8,'Entertainment','Watch GOT S6','Low')
  ];
  constructor() { }

  ngOnInit() {
  }

}
