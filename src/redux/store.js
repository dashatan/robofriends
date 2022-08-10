import { configureStore} from "@reduxjs/toolkit";
import searchReducer from "../redux/searchSlice";
import userReducer from "../redux/usersSlice";
// import {createLogger} from "redux-logger";
import { API } from "./api";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

// const logger = createLogger();

export const store =  configureStore({
    reducer: {
        search: searchReducer,
        user: userReducer,
        [API.reducerPath]: API.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
        // .concat(logger)
        .concat(API.middleware)
});

setupListeners(store.dispatch);

export default store;