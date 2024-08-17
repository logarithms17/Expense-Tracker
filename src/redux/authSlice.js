import { createSlice } from "@reduxjs/toolkit";

import { register, logIn, logOut, refreshUser, refreshToken } from "./authOperations";

const initialState = {
    user: { name: null, email: null },
    token: localStorage.getItem("authToken") || null,
    refreshToken: localStorage.getItem("refreshToken") || null,
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
                state.refreshToken = action.payload.refreshToken;
                state.isLoggedIn = true;
                localStorage.setItem("authToken", action.payload.accessToken);
                // localStorage.setItem("refreshToken", action.payload.refreshToken);
            })
            .addCase(logIn.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.accessToken;
                state.refreshToken = action.payload.refreshToken;
                state.isLoggedIn = true;
                localStorage.setItem("authToken", action.payload.accessToken);
                // localStorage.setItem("refreshToken", action.payload.refreshToken);
            })
            .addCase(logOut.fulfilled, (state) => {
                state.user = { name: null, email: null };
                state.token = null;
                state.refreshToken = null;
                state.isLoggedIn = false;
                localStorage.removeItem("authToken");
                // localStorage.removeItem("refreshToken");
            })
            // .addCase(refreshToken.fulfilled, (state, action) => {
            //     state.token = action.payload.accessToken;
            //     localStorage.setItem("authToken", action.payload.accessToken);
            // })
            // .addCase(refreshToken.rejected, (state) => {
            //     state.token = null;
            //     localStorage.removeItem("authToken");
            // })
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

const authReducer = authSlice.reducer;

export default authReducer;