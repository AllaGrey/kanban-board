import { configureStore } from "@reduxjs/toolkit";
import { boardReducer } from "./boardSlice";

export const store = configureStore({
  reducer: boardReducer,
});