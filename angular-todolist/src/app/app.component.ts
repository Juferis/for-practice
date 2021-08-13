import { Component, OnInit } from '@angular/core';
import { TodoServiceService } from './todo-service.service';
import { TodosComponent } from './todos/todos.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'todo';
  todo: string = '';
  todos: any;

  constructor(private todoService: TodoServiceService) {}

  clickHandler(event: any): void {
    this.todoService.clickEvent(event);
  }

  editOn(event: any) {
    this.todoService.editOn(event);
  }

  onFocus() {
    console.log('Focus');
  }

  onBtnHandler(event: any) {
    this.todoService.deleteHandler(event);
    this.todos = this.todoService.getTodos();
  }

  inputHandler(event: any): void {
    this.todos = this.todoService.inputEvent(event);
  }
  ngOnInit(): void {
    this.todos = this.todoService.getTodos();
  }
}
