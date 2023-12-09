import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { _getTokenFromStorage } from "../../utils";

export const apiSlice = createApi({
    reducerPath: "apiSlice",
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_BACKEND_API_URL,
        prepareHeaders: async (headers, { getState }) => {
            const token = _getTokenFromStorage("accessToken");
            if (token) {
                headers.set("Authorization", `Bearer ${token}`);
            }
            headers.set("Content-Type", "application/json");

            return headers;
        },
    }),
    endpoints: (builder) => ({}),
});