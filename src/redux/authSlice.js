import { createSlice } from "@reduxjs/toolkit";

import { register, logIn, logOut, refreshUser, refreshToken, updateAvatar, updateUser, removeAvatar } from "./authOperations";

const initialState = {
    user: { name: null, email: null },
    avatarUrl: null,
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
            })
            .addCase(logIn.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.accessToken;
                state.refreshToken = action.payload.refreshToken;
                state.isLoggedIn = true;
                localStorage.setItem("authToken", action.payload.accessToken);
            })
            .addCase(logOut.fulfilled, (state) => {
                state.user = { name: null, email: null };
                state.token = null;
                state.refreshToken = null;
                state.isLoggedIn = false;
                localStorage.removeItem("authToken");
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
            })
            .addCase(updateAvatar.fulfilled, (state, action) => {
                state.user = action.payload;
            })
            .addCase(updateAvatar.rejected, (state, action) => {
                console.log(action);
            })
            .addCase(updateUser.fulfilled, (state, action) => {
                state.user = action.payload;
            })
            .addCase(updateUser.rejected, (state, action) => {
                console.log(action);
            })
            .addCase(removeAvatar.fulfilled, (state, action) => {
                state.user = action.payload;
            })
            .addCase(removeAvatar.rejected, (state, action) => {
                console.log(action);
            })
    },
});

const authReducer = authSlice.reducer;

export default authReducer;