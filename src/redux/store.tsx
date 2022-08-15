import { configureStore} from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { searchSlice } from "./searchSlice";
import { usersSlice } from "./usersSlice";
import { API } from "./api";
import { SWAPI } from "./swApi";
import { FacesAPI } from "./faceApi";

export const store =  configureStore({
    reducer: {
        [searchSlice.name]: searchSlice.reducer,
        [usersSlice.name]: usersSlice.reducer,
        [API.reducerPath]: API.reducer,
        [SWAPI.reducerPath]: SWAPI.reducer,
        [FacesAPI.reducerPath]: FacesAPI.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
        .concat(API.middleware)
        .concat(SWAPI.middleware)
        .concat(FacesAPI.middleware)
});

setupListeners(store.dispatch);


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;