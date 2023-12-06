import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  userName: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userLogIn: (state, action) => {
      state.isLoggedIn = true;
      state.userName = action.payload;
    },
  },
});

export const { userLogIn } = authSlice.actions;

export default authSlice.reducer;
