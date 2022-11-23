import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Auth, User } from "../../types/auth";

// Define the initial state using that type
const initialState: Auth = {
  errorMessage: undefined,
  status: "not-authenticated",
  user: {} as User,
};

export const authSlice = createSlice({
  name: "auth",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    onChecking: (state) => {
      state.status = "checking";
      state.user = {} as User;
      state.errorMessage = undefined;
    },
    onLogin: (state, action: PayloadAction<User>) => {
      state.status = "authenticated";
      state.user = action.payload;
      state.errorMessage = "Error on authentication";
    },
    onLogout: (state, action: PayloadAction<string | undefined>) => {
      state.status = "not-authenticated";
      state.user = {} as User;
      state.errorMessage = action.payload;
    },
  },
});

export const { onChecking, onLogin, onLogout } = authSlice.actions;

export default authSlice.reducer;
