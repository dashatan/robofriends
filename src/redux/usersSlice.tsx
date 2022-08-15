import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";

interface  InitialState  {
    loading: boolean,
    users: any[],
    error: string | undefined
} ;

const initialState = {
    loading: false,
    users: [],
    error: ""
} as InitialState;

const AuthorizationKey = "m_NqCWkEu7XYSQkULEWBaQ";

export const fetchUsers = createAsyncThunk("user/fetchUsers",()=>{
    return fetch(`https://api.generated.photos/api/v1/faces?api_key=${AuthorizationKey}`)
        .then(response=> response.json());
});

export const usersSlice = createSlice({
    name: "users",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.loading = false;
            state.users = action.payload;
            state.error = "";
        });
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.loading = false;
            state.users = [];
            state.error = action.error.message;
        });
    },
    reducers: {}
});


export default usersSlice.reducer;