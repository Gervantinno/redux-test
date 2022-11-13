import {
  addTodoActionType,
  deleteTodoActionType,
  todoAction,
  todoActionTypes,
  TodoState,
} from "../../types/todos";

const initialState: TodoState = {
  todos: [],
};

export function todoReducer(
  state = initialState,
  action: todoAction
): TodoState {
  switch (action.type) {
    case todoActionTypes.ADD_TODO: {
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id:
              state.todos.reduce(
                (prev, current) => Math.max(prev, current.id),
                0
              ) + 1,
            text: action.payload,
          },
        ],
      };
    }
    case todoActionTypes.DELETE_TODO: {
      return {
        ...state,
        todos: [...state.todos.filter((todo) => todo.id !== action.payload)],
      };
    }
    default: {
      return state;
    }
  }
}

export function addTodoAction(text: string): addTodoActionType {
  return { type: todoActionTypes.ADD_TODO, payload: text };
}

export function deleteTodoAction(id: number): deleteTodoActionType {
  return { type: todoActionTypes.DELETE_TODO, payload: id };
}
