import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrl: './todo-add.component.css'
})
export class TodoAddComponent implements OnInit {
  titleInput: FormControl;

  constructor(){
    this.titleInput = new FormControl('', Validators.required)
  }

  ngOnInit() {
    
  }

  addTodoTask(): void{

  }
}
