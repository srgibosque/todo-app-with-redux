import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { TodoDTO } from '../models/todo.dto';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrl: './todo-list-item.component.css'
})
export class TodoListItemComponent implements OnInit {
  @Input() todo!: TodoDTO;
  isEditing!: boolean;
  titleInput!: FormControl

  constructor(){}

  ngOnInit(): void {
      this.isEditing = false;
      this.titleInput = new FormControl(this.todo.title, Validators.required);
  }

  completeTask(): void{

  }

  editTask(): void{
    this.isEditing = true;
  }

  deleteTask(): void{

  }

  submitTask(): void{
    this.isEditing = false;
  }
}
