import { createSlice } from '@reduxjs/toolkit';
import { showToast } from '../../utils';

const initialState = {
    subscriptions: JSON.parse(sessionStorage.getItem('subscriptions')) || [],
};

const reducers = {
    addNewSubscription: (state, action) => {
        const randomId = crypto.randomUUID()
        const newSubscription = { ...action.payload, id: randomId }
        sessionStorage.setItem('subscriptions', JSON.stringify([...state.subscriptions, newSubscription]))
        state.subscriptions = [...state.subscriptions, newSubscription]
        showToast("Subscription added", "success")
    },
}

const subscriptionsSlice = createSlice({
    name: "subscriptions",
    initialState,
    reducers
});

export const { addNewSubscription } = subscriptionsSlice.actions;

export default subscriptionsSlice.reducer;