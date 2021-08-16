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

  editSubmit(event: any) {
    if (event.keyCode === 27) {
      event.target.style.display = 'none';
    } else if (event.keyCode === 13) {
      const id = event.target.parentNode.id.slice(3);
      const text = event.target.value;
      const nowText = this.todos[id].text;
      if (text === '') {
        event.target.style.display = 'none';
      } else if (text !== nowText) {
        this.todos[id].text = text;
        this.saveTodo();
        event.target.style.display = 'none';
      } else {
        event.target.style.display = 'none';
      }
    }
  }

  focusOut(event: any) {
    event.target.style.display = 'none';
  }

  editOn(event: any) {
    const li = document.getElementById(`${event.target.id}`);
    const input = <HTMLLIElement>li?.querySelector('.editInput');
    input.style.display = 'inline';
    input.addEventListener('blur', this.focusOut);
  }

  // 삭제 이벤트
  deleteHandler(event: any) {
    this.loadTodo();
    const id = event.target.id.slice(4);
    const li = document.getElementById(`li_${id}`);
    li?.parentNode?.removeChild(li);
    this.todos.splice(id, 1);
    for (let i = 0; i < this.todos.length; i++) {
      this.todos[i].id = i;
    }
    this.saveTodo();
  }

  // input값 배열에 저장하기
  saveHandler(value: string) {
    this.loadTodo();
    const newId: number = this.todos.length;
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

  // 체크박스 이벤트
  clickEvent(event: any) {
    const checkboxId = event.target.id;
    const checkbox = document.getElementById(checkboxId);
    const li = document.getElementById(`li_${checkboxId}`);
    this.todos = this.getTodos();
    if (this.todos[checkboxId].check) {
      checkbox?.classList.remove('checked');
      li?.classList.remove('complete');
      this.todos[checkboxId].check = false;
      this.saveTodo();
    } else {
      checkbox?.classList.add('checked');
      li?.classList.add('complete');
      this.todos[checkboxId].check = true;
      this.saveTodo();
    }
  }

  // enter키 입력 이벤트
  inputEvent(event: any) {
    if (event.keyCode === 13) {
      const text = event.target.value;
      this.saveHandler(text);
      this.todos = this.getTodos();
    }
    event.target.value = '';
    return this.todos;
  }

  constructor() {}
}
