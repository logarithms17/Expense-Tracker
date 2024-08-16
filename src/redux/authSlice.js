import { createSlice } from "@reduxjs/toolkit";

import { register, logIn, logOut, refreshUser } from "./authOperations";

const initialState = {
    user: { name: null, email: null },
    token: localStorage.getItem("authToken") || null,
    isLoggedIn: false,
    isRefreshing: false,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(register.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.accessToken;
                state.isLoggedIn = true;
                console.log(action.payload)
                console.log(action.payload.accessToken)
                localStorage.setItem("authToken", action.payload.accessToken)
            })
            .addCase(logIn.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn = true;
                console.log(action.payload)
                console.log(action.payload.accessToken)
                localStorage.setItem("authToken", action.payload.accessToken)
            })
            .addCase(logOut.fulfilled, (state) => {
                state.user = { name: null, email: null };
                state.token = null;
                state.isLoggedIn = false;
                localStorage.removeItem("authToken")
            })
            .addCase(refreshUser.pending, (state) => {
                state.isRefreshing = true;
            })
            .addCase(refreshUser.fulfilled, (state, action) => {
                state.user = action.payload;
                state.isLoggedIn = true;
                state.isRefreshing = false;
            })
            .addCase(refreshUser.rejected, (state) => {
                state.isRefreshing = false;
            });
    },
});

const authReducer = authSlice.reducer

export default authReducer