import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://expense-tracker.b.goit.study/api/"

const setAuthHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`
}

const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = ''
}

export const register = createAsyncThunk(
    "auth/register",
    async ({ name, email, password }, thunkAPI) => {
        try {
            const response = await axios.post("/auth/register", { name, email, password })
            console.log(response.data)
            setAuthHeader(response.data.token)
            return response.data
        } catch (error) {
    console.error("Registration failed:", error.response?.data || error.message);
    return thunkAPI.rejectWithValue(error.response?.data || error.message);
}
    }
)

export const logIn = createAsyncThunk(
    "auth/login",
    async ({ email, password }, thunkAPI) => {
        try {
            const response = await axios.post("/auth/login", { email, password })
            setAuthHeader(response.data.accessToken)
            console.log(response.data)
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)

export const logOut = createAsyncThunk(
    "auth/logout",
    async (_, thunkAPI) => {
        try {
            await axios.post("/auth/logout")
            clearAuthHeader()
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)

// export const refreshToken = createAsyncThunk(
//     "auth/refreshToken",
//     async (_, thunkAPI) => {
//         const state = thunkAPI.getState();
//         const refreshToken = state.auth.token;  // Assuming the refreshToken is stored here

//         console.log(refreshToken)
//         if (!refreshToken) {
//             return thunkAPI.rejectWithValue("No refresh token available.");
//         }

//         try {
//             const response = await axios.post("/auth/refresh", {
//                 token: refreshToken,
//             });
//             setAuthHeader(response.data.accessToken);
//             console.log("Token refreshed successfully: ", response.data);
//             return response.data;
//         } catch (error) {
//             console.log("Error occurred during token refresh: ", error.response?.data || error.message);
//             return thunkAPI.rejectWithValue(error.response?.data || error.message);
//         }
//     }
// );

export const refreshUser = createAsyncThunk(
    "auth/refreshUser",
    async (_, thunkAPI) => {
        const state = thunkAPI.getState();
        const accessToken = state.auth.token;

        if (!accessToken) {
            return thunkAPI.rejectWithValue("No access token available.");
        }

        console.log(accessToken)
        setAuthHeader(accessToken);

        try {
            const response = await axios.get("/users/current");
            console.log("User data refreshed successfully: ", response.data);
            return response.data;
        } catch (error) {
            console.log("Error occurred during refreshUser API call: ", error.response?.data || error.message);
            return thunkAPI.rejectWithValue(error.response?.data || error.message);
        }
    }
);
