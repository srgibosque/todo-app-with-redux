import { Action, createReducer, on } from "@ngrx/store";
import * as actions from "../todos/todo.actions"
import { TodoDTO } from "./models/todo.dto";

const initalState:TodoDTO[] = [new TodoDTO('aaaaa')];

const _todoReducer = createReducer(
  initalState,
  on(actions.createTodo, (state, {title}) => [...state, new TodoDTO(title)])
);

export function todoReducer(state: TodoDTO[] = initalState, action: Action){
  return _todoReducer(state, action);
}