import { combineReducers } from "redux";
import { todoReducer } from "./todoReducer";

export const rootReducer = combineReducers({ todo: todoReducer });

export type RootStateType = ReturnType<typeof rootReducer>;
