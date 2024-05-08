import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
    reducerPath: "main",
    tagTypes: ["kpis"],
    endpoints: (build) => ({
        getKpis: build.query<void, void>({
            query: () => "kpis/kpis",
            providesTags: ["kpis"],
        }),
    }),
})

export const { useGetKpisQuery } = api;