import { combineReducers } from "redux";
import { toDoListSlice } from "./toDoSlice";
import { configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  toDoList: toDoListSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
});
