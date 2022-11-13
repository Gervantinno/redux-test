import { ITodo } from "../../types/todos";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// other variant
// export function fetchTodoAction() {
//   return async function (dispatch: DispatchType) {
//     try {
//       dispatch(todoSlice.actions.usersFetching());
//       const response = await axios.get<ITodo[]>(
//         "https://jsonplaceholder.typicode.com/todos"
//       );
//       dispatch(todoSlice.actions.usersFetchingSuccess(response.data));
//     } catch (e: any) {
//       dispatch(todoSlice.actions.usersFetchingError(e.message));
//     }
//   };
// }

export const fetchTodoAction = createAsyncThunk(
  "todos/fetchAll",
  async (_, thunkApi) => {
    try {
      const response = await axios.get<ITodo[]>(
        "https://jsonplaceholder.typicode.com/todos"
      );
      return response.data;
    } catch (e: any) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);
