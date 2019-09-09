import { Component, OnInit, Input } from '@angular/core';
import { TodoInfo } from '../models/todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo:TodoInfo;

  constructor() { }

  ngOnInit() {
  }

}
