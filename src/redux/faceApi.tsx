import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const AuthorizationKey = "mFZSjNFLOLMjntegnevINw";

export const FacesAPI = createApi({
    reducerPath: "facesApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://api.generated.photos/api/v1",
        prepareHeaders: (headers) => {
            headers.set("Authorization", `Api_key ${AuthorizationKey}`);
            return headers;
        }
    }),
    endpoints: (builder) => ({
        faces: builder.query({
            query: () => "/faces",
        }),
    
    })
});

export const {useFacesQuery} = FacesAPI;