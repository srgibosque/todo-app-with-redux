import { getAllTodos, getAllTodosError, getAllTodosSuccess } from './../actions/todo.actions';
import { Injectable } from '@angular/core';
import { TodoService } from './../services/todo.service';
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of } from 'rxjs';


@Injectable()
export class TodosEffects{
  
  constructor(
    private actions$: Actions, 
    private todoService: TodoService
  ){}

  getTodos$ = createEffect(() =>
   this.actions$.pipe(
    ofType(getAllTodos),
    mergeMap(() => 
    this.todoService.getAllTodos().pipe(
      map((todos) => getAllTodosSuccess({todos: todos})),
      catchError((err) => of(getAllTodosError({payload: err})))
    ))
   )
  );
}