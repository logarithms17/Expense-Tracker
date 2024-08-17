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

export const refreshUser = createAsyncThunk(
    "auth/refresh",
    async (_, thunkAPI) => {
        const state = thunkAPI.getState()
        const persistedToken = state.auth.token

        if (persistedToken === null) {
            return thunkAPI.rejectWithValue("Unable to fetch user")
        }

        setAuthHeader(persistedToken)

        try {
            const response = await axios.get("/auth/current", {
                headers: {
                    Authorization: `Bearer ${persistedToken}`,
                },
            })
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)
