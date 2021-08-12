import { Component } from '@angular/core';
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

  inputHandler(event: any): void {
    if (event.keyCode === 13) {
      this.todo = event.target.value;
      this.todoService.saveHandler(this.todo);
      this.todos = this.todoService.getTodos();
    }
    event.target.value = '';
  }
}
