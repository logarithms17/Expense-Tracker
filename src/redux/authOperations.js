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
        const state = thunkAPI.getState();
        const token = state.auth.token;

        console.log(token)
        try {
            if (!token) {
                return thunkAPI.rejectWithValue("No access token available.");
            }

            setAuthHeader(token);

            await axios.get("/auth/logout");

            clearAuthHeader();
            return { message: "Logged out successfully" };
        } catch (error) {
            console.log("Error occurred during logOut API call: ", error.response?.data || error.message);
            return thunkAPI.rejectWithValue(error.message)
        }
            }
)


export const refreshUser = createAsyncThunk(
    "auth/refreshUser",
    async (_, thunkAPI) => {
        const state = thunkAPI.getState();
        const accessToken = state.auth.token;

        if (!accessToken) {
            return thunkAPI.rejectWithValue("No access token available.");
        }

        setAuthHeader(accessToken);

        try {
            const response = await axios.get("/users/current");
            return response.data;
        } catch (error) {
            console.log("Error occurred during refreshUser API call: ", error.response?.data || error.message);
            return thunkAPI.rejectWithValue(error.response?.data || error.message);
        }
    }
);

// UPDATING AVATAR INFO

export const updateAvatar = createAsyncThunk(
    "auth/updateAvatar",
    async (avatar, thunkAPI) => {
        const state = thunkAPI.getState();
        const token = state.auth.token;

        if (!token) {
            return thunkAPI.rejectWithValue("No access token available.");
        }

        try {
            const response = await axios.patch("/users/avatar", avatar);
            console.log("Avatar updated successfully: ", response.data);
            return response.data;
        } catch (error) {
            console.log("Error occurred during updateAvatar API call: ", error.response?.data || error.message);
            return thunkAPI.rejectWithValue(error.response?.data || error.message);
        }
    }
);

// UPDATING USERS INFO

export const updateUser = createAsyncThunk(
    "auth/updateUser",
    async (user, thunkAPI) => {
        const state = thunkAPI.getState();
        const token = state.auth.token;
        console.log(user)

        if (!token) {
            return thunkAPI.rejectWithValue("No access token available.");
        }

        try {
            const response = await axios.patch("/users/info", user);
            console.log("User updated successfully: ", response.data);
            return response.data;
        } catch (error) {
            console.log("Error occurred during updateUser API call: ", error.response?.data || error.message);
            return thunkAPI.rejectWithValue(error.response?.data || error.message);
        }
    }
);

// REMOVE AVATAR

export const removeAvatar = createAsyncThunk(
  "auth/removeAvatar",
  async (avatarId, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;

    if (!token) {
      return thunkAPI.rejectWithValue("No access token available.");
    }

    if (!avatarId) {
      return thunkAPI.rejectWithValue("No avatar ID provided.");
    }

    try {
      const response = await axios.delete(`/users/avatar/${avatarId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("Avatar removed successfully: ", response.data);
      return response.data;
    } catch (error) {
      console.log("Error occurred during removeAvatar API call: ", error.response?.data || error.message);
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);
