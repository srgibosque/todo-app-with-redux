import { Component, OnInit } from '@angular/core';
import { TodoDTO } from '../models/todo.dto';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { TodoService } from '../services/todo.service';
import { getAllTodos } from '../actions/todo.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent implements OnInit{
  todos: TodoDTO[] = [];

  constructor(private store: Store<AppState>, private todoService: TodoService){}

  ngOnInit(): void {
      this.store.select('todosApp').subscribe((todosResponse) => {
        this.todos = todosResponse.todos;
      });

      this.store.dispatch(getAllTodos());
      // this.todoService.getAllTodos().subscribe((todos) => console.log(todos));
  }
}
