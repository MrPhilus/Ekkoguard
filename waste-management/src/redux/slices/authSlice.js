import { createSlice } from '@reduxjs/toolkit';
import { storageService } from '../../services';

const initialState = {
  authData: storageService.getAuthData() || null,
  otp: '',
  phoneNumber: sessionStorage.getItem('newUserPhoneNumber') || '',
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthData: (state, action) => {
      storageService.saveAuthData(action.payload)
      state.authData = action.payload;
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

export const { setAuthToken, setOTP, setPhoneNumber, setAuthData } = authSlice.actions;

export default authSlice.reducer;