import { Component } from '@angular/core';
import { Todo } from './todo';
import { TodoDataService } from './todo-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css',
    './app.todo.css',
  ],
  providers: [TodoDataService],
})
export class AppComponent {
  title = 'todo';
  private todoDataService: TodoDataService;
  newTodo: Todo = new Todo();
  // Ask Angular DI system to inject the dependency
  // associated with the dependency injection token `TodoDataService`
  // and assign it to a property called `todoDataService`
  // constructor(private todoDataService: TodoDataService) { } - shorthand constructor
  constructor(todoDataService: TodoDataService) {
    this.todoDataService = todoDataService;
  }

  add() {
    this.todoDataService.add(this.newTodo);
    this.newTodo = new Todo();
  }

  remove(todo: Todo) {
    this.todoDataService.delete(todo.id);
  }

  get todos() {
    return this.todoDataService.findAll();
  }

  toggleComplete(todo: Todo) {
    this.todoDataService.toggleComplete(todo);
  }
}
