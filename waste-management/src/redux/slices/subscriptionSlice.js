import { createSlice } from '@reduxjs/toolkit';
import { storageService } from '../../services';

const initialState = {
    subscriptions: JSON.parse(sessionStorage.getItem('subscriptions')) || [],
};

const reducers = {
    addNewSubscription: (state, action) => {
        const newSubscription = action.payload
        sessionStorage.setItem('subscriptions', JSON.stringify([...state.subscriptions, newSubscription]))
        state.subscriptions = [...state.subscriptions, newSubscription]
    },
}

const subscriptionsSlice = createSlice({
    name: "subscriptions",
    initialState,
    reducers
});

export const { setAuthToken, setOTP, setPhoneNumber, setAuthData } = subscriptionsSlice.actions;

export default subscriptionsSlice.reducer;