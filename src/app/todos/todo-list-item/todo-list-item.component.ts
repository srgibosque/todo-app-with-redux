import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { TodoDTO } from '../models/todo.dto';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import * as actions from '../todo.actions'

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrl: './todo-list-item.component.css'
})
export class TodoListItemComponent implements OnInit {
  @Input() todo!: TodoDTO;
  isEditing!: boolean;
  titleInput!: FormControl

  constructor(private store:Store<AppState>){}

  ngOnInit(): void {
      this.isEditing = false;
      this.titleInput = new FormControl(this.todo.title, Validators.required);
  }

  completeTask(): void{
    this.store.dispatch(actions.completeTodo({id: this.todo.id}));
  }

  editTask(): void{
    this.isEditing = true;
  }

  deleteTask(): void{

  }

  submitTask(): void{
    this.isEditing = false;

    if(!this.titleInput.invalid && this.titleInput.value !== this.todo.title){
      this.store.dispatch(actions.editTodo({id: this.todo.id, title: this.titleInput.value}));
    }
  }
}
