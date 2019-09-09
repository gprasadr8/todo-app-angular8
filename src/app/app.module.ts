import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TodosComponent } from './todos/todos.component';
import { TodoListComponent } from './todos/todo-list/todo-list.component';
import { TodoItemComponent } from './todos/todo-item/todo-item.component';
import { ActivityReportComponent } from './todos/activity-report/activity-report.component';
import { AddTodoComponent } from './todos/add-todo/add-todo.component';
import { TodoItemDetailsComponent } from './todos/todo-item/todo-item-details/todo-item-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TodosComponent,
    TodoListComponent,
    TodoItemComponent,
    ActivityReportComponent,
    AddTodoComponent,
    TodoItemDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
