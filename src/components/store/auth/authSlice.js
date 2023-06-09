import { createSlice } from '@reduxjs/toolkit'
import { signInRequest, signUpRequest } from './authThunk';
const isAuthorizationFromLocal = localStorage.getItem("Authorization")
const isAuthorization = isAuthorizationFromLocal ? JSON.stringify(isAuthorizationFromLocal) : false
const initialState = {
    isAuthorization,
    isLoading: true,
    token: "",
    user: {
        name: "",
        gmail: "",
        password: "",
        id: ""
    }
}
export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logOutHandler: (state, action) => {
            state.isAuthorization = false
        }
    },
    extraReducers: (builder) => {
        builder.addCase(signUpRequest.fulfilled, (state, action) => {
            state.isAuthorization = true;
            state.token = action.payload.token;
            console.log(state);
            state.isLoading = true
        });
        builder.addCase(signUpRequest.pending, (state, action) => {
            state.isLoading = false
        })
        builder.addCase(signUpRequest.rejected, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(signInRequest.fulfilled, (state, action) => {
            state.isAuthorization = true;
            state.token = action.payload.token;
            state.user = action.payload.user;
            state.isLoading = true
        });
        builder.addCase(signInRequest.pending, (state, action) => {
            state.isLoading = false
        })
        builder.addCase(signInRequest.rejected, (state, action) => {
            state.isLoading = true
        })
    },
});

export const authActions = authSlice.actions
export const authReducer = authSlice.reducer