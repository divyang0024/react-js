import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";

export const store = configureStore({
  reducers: {
    counter: counterSlice,
  },
});
