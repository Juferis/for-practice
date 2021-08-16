import { Component, OnInit } from '@angular/core';
import { TodoServiceService } from './todo-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'todo';
  todo: string = '';
  todos: any;
  toggle: number = 0;

  constructor(private todoService: TodoServiceService) {}

  showDone() {
    this.toggle = 2;
    this.todos = this.todoService.getTodos();
  }

  showTodo() {
    this.toggle = 1;
    this.todos = this.todoService.getTodos();
  }

  showAll() {
    this.toggle = 0;
    this.todos = this.todoService.getTodos();
  }

  clickHandler(event: any): void {
    this.todoService.clickEvent(event);
  }

  editOn(event: any) {
    this.todoService.editOn(event);
  }

  editSubmit(event: any) {
    this.todoService.editSubmit(event);
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
