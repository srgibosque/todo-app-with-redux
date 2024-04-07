import { createAction, props } from "@ngrx/store";
import { TodoDTO } from "../models/todo.dto";


export const createTodo = createAction(
  '[TODO] Create todo',
  props<{ title:string }>()
);

export const completeTodo = createAction(
  '[TODO] Complete todo',
  props<{ id:number }>()
);

export const editTodo = createAction(
  '[TODO] Edit todo',
  props<{ id:number, title:string }>()
);

export const deleteTodo = createAction(
  '[TODO] Delete todo',
  props<{ id:number}>()
);

export const getAllTodos = createAction(
  '[TODO] Get all'
);

export const getAllTodosSuccess = createAction(
  '[TODO] Get all success',
  props<{todos: TodoDTO[]}>()
);

export const getAllTodosError = createAction(
  '[TODO] Get all error',
  props<{payload: any}>()
);