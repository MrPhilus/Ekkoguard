/* eslint-disable no-undef */
import { apiSlice } from "../store/apiSlice";
import { storageService } from "./index";

const extendedApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (request) => ({
                url: "/auth/login",
                method: "POST",
            }),
        }),

        signUp: builder.mutation({
            query: (request) => ({
                url: '/auth/signup',
                method: 'POST'
            })
        }),

        async onQueryStarted(_, { queryFulfilled }) {
            try {
                const { data } = await queryFulfilled

                if (data.endpoint === 'login') {
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