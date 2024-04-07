import { Action, createReducer, on } from "@ngrx/store";
import * as actions from "../actions/todo.actions"
import { TodoDTO } from "../models/todo.dto";

// const initalState:TodoDTO[] = [new TodoDTO('Task 0')];

export interface TodoState{
  todos: TodoDTO[];
  loading: boolean;
  loaded: boolean;
  error: any;
}

export const initialState: TodoState = {
  todos: [new TodoDTO('Task 0')],
  loading: false,
  loaded: false,
  error: null
}

const _todoReducer = createReducer(
  initialState,
  on(actions.createTodo, (state, {title}) => ({
    ...state,
    loading: false,
    loaded: false,
    todos: [...state.todos, new TodoDTO(title)]
  })),

  on(actions.completeTodo, (state, {id}) => ({
    ...state,
    loading: false,
    loaded: false,
    todos: [...state.todos.map((todo) => {
      if(todo.id === id){
        return {
          ...todo,
          done: true,
        }
      } else {
        return todo;
      }
    })]
  })),

  on(actions.editTodo, (state, {id,title}) => ({
    ...state,
    loading: false,
    loaded: false,
    todos: [...state.todos.map((todo) => {
      if(todo.id === id){
        return {
          ...todo,
          title
        }
      } else {
        return todo;
      }
    })]
  })),

  on(actions.deleteTodo, (state, {id}) => ({
    ...state,
    loading: false,
    loaded: false,
    todos: [...state.todos.filter((todo) => todo.id !== id)]

  })),

  on(actions.getAllTodos, state => ({...state, loading: true})),

  on(actions.getAllTodosSuccess, (state, {todos}) => ({
    ...state,
    loading: false,
    loaded: true,
    todos: [...todos]
  })),

  on(actions.getAllTodosError, (state, {payload}) => ({
    ...state,
    loading: false,
    loaded: false,
    error: payload
  }))

);

export function todoReducer(state: TodoState | undefined , action: Action){
  return _todoReducer(state, action);
}