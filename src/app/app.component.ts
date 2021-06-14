import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Todos';
  todoList: any[] = [];
  todoTitle: string;

  ngOnInit(): void {
    this.todoList = [
      { title: 'Install Angular CLI', isDone: false, time: new Date()}
    ];
    this.todoTitle = '';
    }

    deleteTodo(todo: any): void {
      const index = this.todoList.findIndex(todoItem => todoItem === todo);
      this.todoList.splice(index, 1);
    }

    addTodo():void {
      this.todoList.push({
        title: this.todoTitle,
        isDone: false,
        time: new Date()
      });
      // resets our todoTitle variable to an empty string
      this.todoTitle = '';
    }

    complete(todo: any) : void {
      todo.isDone = !todo.isDone;
    }
  }
