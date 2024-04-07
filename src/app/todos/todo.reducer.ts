import { Action, createReducer, on } from "@ngrx/store";
import * as actions from "../todos/todo.actions"
import { TodoDTO } from "./models/todo.dto";

const initalState:TodoDTO[] = [new TodoDTO('Task 0')];

const _todoReducer = createReducer(
  initalState,
  on(actions.createTodo, (state, {title}) => [...state, new TodoDTO(title)]),
  on(actions.completeTodo, (state, {id}) => {
    return state.map((todo) => {
      if(todo.id === id) {
        return {...todo, done: true};
      } else {
        return todo;
      }
    })
  }),
  on(actions.editTodo, (state, {id,title}) => {
    return state.map((todo) => {
      if(todo.id === id){
        return {...todo, title: title};
      } else {
        return todo;
      }
    })
  }),
  on(actions.deleteTodo, (state, {id}) => state.filter(todo => todo.id !== id))
);

export function todoReducer(state: TodoDTO[] = initalState, action: Action){
  return _todoReducer(state, action);
}