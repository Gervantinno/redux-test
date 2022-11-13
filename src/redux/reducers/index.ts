import { combineReducers } from "redux";
import todoReducer from "./todoReducer";

export const rootReducer = combineReducers({ todoReducer });

export type RootStateType = ReturnType<typeof rootReducer>;
