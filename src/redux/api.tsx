import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import { User } from "./types/User";

export const API = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://jsonplaceholder.typicode.com"
    }),
    endpoints: (builder) => ({
        users: builder.query<User[], void>({
            query: () => "/users" ,
            transformResponse: (response: User[]) => {
                const newData = response.map((item: User)=>({...item, imageAddress:`https://robohash.org/${item.id}?size=200x200`}));
                return newData;
            }
        }),
        comments: builder.query<any[], void>({
            query: () => "/comments"
        })
    })
});

export const {useUsersQuery, useCommentsQuery} = API;