import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: null,
  otp: '',
  phoneNumber: sessionStorage.getItem('newUserPhoneNumber') || '',
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthToken: (state, action) => {
      state.token = action.payload;
    },
    setOTP: (state, action) => {
      state.otp = action.payload
    },
    setPhoneNumber: (state, action) => {
      state.phoneNumber = action.payload
      sessionStorage.setItem('newUserPhoneNumber', action.payload)
    },
  },
});

export const { setAuthToken, setOTP, setPhoneNumber } = authSlice.actions;

export default authSlice.reducer;