import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./slices/apiSlice";
import { useSelector } from "react-redux";
import authReducer from "./slices/authSlice";
import modalReducer from "./slices/modalSlice";
import subscriptionsReducer from "./slices/subscriptionSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
    modal: modalReducer,
    subscriptions: subscriptionsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export const RootState = store.getState;
export const AppDispatch = store.dispatch;
export const useAppSelector = useSelector;

/*---------- RootState ----------*/
// This export provides a function that returns the current state of the Redux store.
// It's a reference to the getState method of the Redux store.
// You can use it to access the current state in your application.

/*---------- App dispatch -------*/
// This export provides a reference to the dispatch method of the Redux store.
// It allows you to dispatch actions to the store from outside of React components.
// You can use it to dispatch actions in response to various events in your application.

/*-------- useAppSelector -------*/
// This export is a reference to the useSelector hook from the react-redux library.
// It's a hook that allows you to extract data from the Redux store state in your React components.
// It's commonly used to read values from the store in function components.
