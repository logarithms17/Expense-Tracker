import { createSlice } from "@reduxjs/toolkit";

import { register, logIn, logOut, refreshUser, updateAvatar, updateUser, removeAvatar, createCategory, deleteCategory } from "./authOperations";

const initialState = {
    user: { name: null, email: null },
    avatarUrl: null,
    token: localStorage.getItem("authToken") || null,
    refreshToken: localStorage.getItem("refreshToken") || null,
    isLoggedIn: false,
    isRefreshing: false,

    categories: {
        incomes: [{
            categoryName: null,
            type: null,
        } 
        ],
        expenses: [],
    }
    
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
            .addCase(createCategory.fulfilled, (state, action) => {
                const { type } = action.payload
                if (type === "expenses") {
                    state.user.categories.expenses.push(action.payload);
                }

                if (type === "incomes") {
                    state.user.categories.incomes.push(action.payload);
                }

                console.log("Category added:", action.payload);
            })
            .addCase(deleteCategory.fulfilled, (state, action) => {
                const { _id, type } = action.payload;
                console.log(_id, type)

    // Provide default value if type is missing
    const categoryType = type || "unknown";

    if (categoryType === "expenses") {
        state.user.categories.expenses = state.user.categories.expenses.filter(
            (category) => category._id !== _id
        );
    } else if (categoryType === "incomes") {
        state.user.categories.incomes = state.user.categories.incomes.filter(
            (category) => category._id !== _id
        );
    } else {
        console.error("Unknown category type:", categoryType);
    }

    console.log("Category deleted:", action.payload);
})
            .addCase(deleteCategory.rejected, (state, action) => {
                // Log the error action for debugging
                console.log(action);

                // Optionally, store the error in the state for error handling in the UI
                state.error = action.payload || "Category deletion failed";
            });
                },
            });

const authReducer = authSlice.reducer;

export default authReducer;