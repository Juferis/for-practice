import { Component, OnInit } from '@angular/core';
import { TodoServiceService } from '../todo-service.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: any = this.getTodo();

  getTodo() {
    return this.todoService.getTodos();
  }
  constructor(private todoService: TodoServiceService) {}
  ngOnInit(): void {}
}
