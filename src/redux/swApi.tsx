import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const SWAPI = createApi({
    reducerPath: "swApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://swapi.dev/api/"
    }),
    endpoints: (builder) => ({
        people: builder.query<any[], any>({
            query: () => "/people"
        }),
    })
});

export const {usePeopleQuery} = SWAPI;