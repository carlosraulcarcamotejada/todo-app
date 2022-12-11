import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "../todos/types/Todo";



// Define the initial state using that type
const initialState = {};

export const uiSlice = createSlice({
  name: "ui",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    
  },
});

export const { } = uiSlice.actions;

export default uiSlice.reducer;