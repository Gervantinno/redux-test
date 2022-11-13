export interface TodoState {
  todos: { id: number; text: string }[];
}

export enum todoActionTypes {
  ADD_TODO = "ADD_TODO",
  DELETE_TODO = "DELETE_TODO",
}

export interface addTodoActionType {
  type: todoActionTypes.ADD_TODO;
  payload: string;
}

export interface deleteTodoActionType {
  type: todoActionTypes.DELETE_TODO;
  payload: number;
}

export type todoAction = addTodoActionType | deleteTodoActionType;
