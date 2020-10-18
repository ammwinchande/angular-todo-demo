import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {
  // automatic incrementing of ids
  lastId: number = 0;

  // Placeholder for todos
  todos: Todo[] = [];

  constructor() { }

  // Simulate GET /todos
  findAll(): Todo[] {
    return this.todos;
  }

  // Simulate POST /todos - Create
  add(todo: Todo): TodoDataService {
    if (!todo.id) {
      todo.id = ++this.lastId;
    }
    this.todos.push(todo);
    return this;
  }

  // Simulate GET /todos/:id
  show(id: number): Todo {
    return this.todos
      .filter(todo => todo.id === id)
      .pop();
  }

  // Simulate PUT /todos/:id
  update(id: number, values: Object = {}): Todo {
    let todo = this.show(id);
    if (!todo) {
      return null;
    }
    Object.assign(todo, values);
    return todo;
  }

  // Simulate DELETE /todos/:id
  delete(id: number): TodoDataService {
    this.todos = this.todos
      .filter(todo => todo.id !== id);
    return this;
  }

  // Toggle todo complete
  toggleComplete(todo: Todo) {
    let updatedTodo = this.update(todo.id, {
      complete: !todo.complete
    });
    return updatedTodo;
  }
}
