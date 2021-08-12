import { Injectable } from '@angular/core';
import { Todos } from './todo';

@Injectable({
  providedIn: 'root',
})
export class TodoServiceService {
  todos: any = [];
  TODO_STORAGE: string = 'todos';

  // localstorage에 저장
  saveTodo() {
    localStorage.setItem(this.TODO_STORAGE, JSON.stringify(this.todos));
  }
  // localstorage에서 데이터 로드
  loadTodo() {
    const loadToDos = localStorage.getItem(this.TODO_STORAGE);
    if (loadToDos !== null) {
      const parsedToDos = JSON.parse(loadToDos);
      this.todos = parsedToDos;
    }
  }

  // input값 배열에 저장하기
  saveHandler(value: string) {
    this.loadTodo();
    const newId: number = this.todos.length + 1;
    const todo: Todos = {
      id: newId,
      text: value,
      check: false,
    };
    this.todos.push(todo);
    this.saveTodo();
  }

  getTodos() {
    this.loadTodo();
    return this.todos;
  }

  constructor() {}
}
