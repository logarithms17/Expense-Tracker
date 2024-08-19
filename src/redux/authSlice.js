import { createSlice } from "@reduxjs/toolkit";

import { register, logIn, logOut, refreshUser, updateAvatar, updateUser, removeAvatar, createCategory, deleteCategory, updateCategory } from "./authOperations";

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
                const id = action.payload;

                // Ensure categories object exists and is properly formatted
                if (state.user.categories) {
                    if (Array.isArray(state.user.categories.expenses)) {
                        state.user.categories.expenses = state.user.categories.expenses.filter(
                            (category) => category._id !== id
                        );
                    } else {
                        console.error("Expenses is not an array or is undefined.");
                    }

                    if (Array.isArray(state.user.categories.incomes)) {
                        state.user.categories.incomes = state.user.categories.incomes.filter(
                            (category) => category._id !== id
                        );
                    } else {
                        console.error("Incomes is not an array or is undefined.");
                    }
                } else {
                    console.error("Categories object is undefined.");
                }

                console.log("Category deleted:", id);
            })
            .addCase(deleteCategory.rejected, (state, action) => {
                // Log the error action for debugging
                console.log(action);

                // Optionally, store the error in the state for error handling in the UI
                state.error = action.payload || "Category deletion failed";
            })
            .addCase(updateCategory.fulfilled, (state, action) => {
                const updatedCategory = action.payload;

                if (updatedCategory) {
                    if (Array.isArray(state.user.categories.expenses)) {
                        state.user.categories.expenses = state.user.categories.expenses.map((category) => {
                            if (category._id === updatedCategory._id) {
                                return updatedCategory;
                            }
                            return category;
                        });
                    } else {
                        console.error("Expenses is not an array or is undefined.");
                    }

                    if (Array.isArray(state.user.categories.incomes)) {
                        state.user.categories.incomes = state.user.categories.incomes.map((category) => {
                            if (category._id === updatedCategory._id) {
                                return updatedCategory;
                            }
                            return category;
                        });
                    } else {
                        console.error("Incomes is not an array or is undefined.");
                    }

                    console.log("Category updated:", updatedCategory);
                }

                console.log("Category update failed:", action.error);
            })
            },
        });

const authReducer = authSlice.reducer;

export default authReducer;