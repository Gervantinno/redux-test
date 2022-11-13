import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "../reducers/";

const store = configureStore({
  reducer: rootReducer,
});

export { store };

export type StoreType = typeof store;
export type DispatchType = StoreType["dispatch"];
