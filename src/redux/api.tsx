import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const API = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://jsonplaceholder.typicode.com"
    }),
    endpoints: (builder) => ({
        users: builder.query<any[], any>({
            query: () => "/users"
        }),
        comments: builder.query<any[], any>({
            query: () => "/comments"
        })
    })
});

export const {useUsersQuery, useCommentsQuery} = API;