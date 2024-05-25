import { configureStore } from "@reduxjs/toolkit";
import { boardReducer } from "./boardSlice";

export const store = configureStore({
  reducer: boardReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
