import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  isOpenModal: boolean;
};

// Define the initial state using that type
const initialState: InitialState = {
  isOpenModal: false,
};

export const uiSlice = createSlice({
  name: "ui",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    onToggleModal: (state) => {
      state.isOpenModal = !state.isOpenModal;
    },
  },
});

export const { onToggleModal } = uiSlice.actions;

export default uiSlice.reducer;
