/* eslint-disable no-undef */
import { apiSlice } from "../redux/slices/apiSlice";
import { storageService } from "./index";

const extendedApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (credentials) => ({
                url: "/auth/login",
                method: "POST",
                body: JSON.stringify(credentials)
            }),
        }),

        signUp: builder.mutation({
            query: (credentials) => ({
                url: '/auth/signup',
                method: 'POST',
                body: JSON.stringify(credentials),
            })
        }),

        async onQueryStarted(_, { queryFulfilled }) {
            try {
                const { data } = await queryFulfilled

                if (data.endpoint === 'login') {
                    console.log(data.payload)
                    storageService.saveAuthData(data.payload);
                }
            } catch (err) {
                alert('An error occurred. Please try again.')
                console.error(err)
            }
        },
    }),
})

export function logout() {
    storageService.clearCookieData();
    return window.location.replace(import.meta.env.BASE_URL);
}

export function isAuthenticated() {
    const authData = storageService.getAuthData();
    if (!authData.accessToken) {
        return false;
    }
    return true;
}

export const { useLoginMutation, useSignUpMutation } = extendedApi