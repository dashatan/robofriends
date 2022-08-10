import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    text:""
};

export const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers:{
        search: (state, action) => {
            state.text = action.payload;
        }
    }
});

export const {search} = searchSlice.actions;
export default searchSlice.reducer;