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

        try {
            if (!token) {
                return thunkAPI.rejectWithValue("No access token available.");
            }

            setAuthHeader(token);

            await axios.get("/auth/logout");

            clearAuthHeader();
            return { message: "Logged out successfully" };
        } catch (error) {
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

        if (!token) {
            return thunkAPI.rejectWithValue("No access token available.");
        }

        try {
            const response = await axios.patch("/users/info", user);
            return response.data;
        } catch (error) {
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
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);

// CREATE USER TRANSACTIONS CATEGORY

export const createCategory = createAsyncThunk(
    "auth/createCategory",
    async (category, thunkAPI) => {
        const state = thunkAPI.getState();
        const token = state.auth.token;

        if (!token) {
            return thunkAPI.rejectWithValue("No access token available.");
        }

        try {
            const response = await axios.post("/categories", category, {
                headers: {
                    Authorization: `Bearer ${token}` // Pass the token in the header
                }
            });
            console.log("Category created successfully: ", response.data);
            return response.data;
        } catch (error) {
            console.log("Error occurred during createCategory API call: ", error.response?.data || error.message);
            return thunkAPI.rejectWithValue(error.response?.data || error.message);
        }
    }
)

// DELETE USER TRANSACTION CATEGORY

export const deleteCategory = createAsyncThunk(
    "auth/deleteCategory",
    async (id, thunkAPI) => {
        const state = thunkAPI.getState();
        const token = state.auth.token;

        if (!token) {
            return thunkAPI.rejectWithValue("No access token provided.");
        }

        try {
            // Ensure 'id' is defined
            if (!id) {
                return thunkAPI.rejectWithValue("No category ID provided.");
            }
            
            // Make the API request
            const response = await axios.delete(`/categories/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            
            // Assuming the response doesn't have a body and just returns status code 204
            return id;  // Return the ID for further processing in the slice
        } catch (error) {
            // Handle various error scenarios
            if (error.response) {
                // Server responded with a status other than 2xx
                return thunkAPI.rejectWithValue(error.response.data.message || "Category deletion failed");
            } else {
                // Network error or something else
                return thunkAPI.rejectWithValue(error.message);
            }
        }
    }
);

// UPDATE USER TRANSACTION CATEGORY

export const updateCategory = createAsyncThunk(
  'auth/updateCategory',
  async ({ id, categoryName }, { rejectWithValue }) => {
    try {
      const response = await axios.patch(
        `/categories/${id}`,
        { categoryName }, // Only send categoryName in the body
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('authToken')}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error('Error occurred during updateCategory API call: ', error);
      return rejectWithValue(error.response.data);
    }
  }
);
