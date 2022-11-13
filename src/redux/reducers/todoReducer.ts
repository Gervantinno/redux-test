import { ITodo, TodoState } from "../../types/todos";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchTodoAction } from "../actions/fetchTodoAction";

const initialState: TodoState = {
  todos: [],
  isLoading: false,
  error: "",
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    usersFetching(state) {
      state.isLoading = true;
    },
    usersFetchingSuccess(state, action: PayloadAction<ITodo[]>) {
      state.isLoading = false;
      state.error = "";
      state.todos = action.payload;
    },
    usersFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
  extraReducers: {
    [fetchTodoAction.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchTodoAction.fulfilled.type]: (
      state,
      action: PayloadAction<ITodo[]>
    ) => {
      state.isLoading = false;
      state.error = "";
      state.todos = action.payload;
    },
    [fetchTodoAction.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default todoSlice.reducer;
