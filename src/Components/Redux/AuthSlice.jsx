import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "./Helper";
import { toast } from "react-toastify";

const initialState = {
  redirectTo: null,
  isLoggedIn: false,
  token: null,
};

export const register = createAsyncThunk("auth/register", async (formData) => {
  const response = await axiosInstance.post("/user/signup", formData);
  return response.data;
});

export const login = createAsyncThunk("auth/login", async (formData) => {
  const response = await axiosInstance.post("/user/signin", formData);
  localStorage.setItem("token", response.data.token);
  return response.data;
});

export const logout = () => (dispatch) => {
  localStorage.removeItem("token");
  toast("Logout Successful");
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetRedirectTo: (state, { payload }) => {
      state.redirectTo = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        const response = action.payload;
        if (response.status === 200) {
          state.redirectTo = "/login";
          toast.success("Registration successful");
        } else {
          toast.error("Registration failed: " + response.data.message);
        }
      })
      .addCase(register.rejected, (state, action) => {
        const errorResponse = action.error.message;
        if (errorResponse.includes("Email already registered")) {
          toast.error("Registration failed: Email already registered");
        } else {
          toast.error("Registration failed: " + errorResponse);
        }
      })
      .addCase(login.fulfilled, (state, action) => {
        const response = action.payload;
        if (response.status === 200) {
          state.redirectTo = "/userprofile";
          sessionStorage.setItem("first_name", response.data.first_name);
          sessionStorage.setItem("last_name", response.data.last_name);
          if (response.data.profile && response.data.profile.img) {
            sessionStorage.setItem("profile_img", response.data.profile.img);
          } else {
            sessionStorage.setItem("profile_img", ""); 
          }
          sessionStorage.setItem("log_token", response.token);
          state.isLoggedIn = true; 
          toast.success(response.message);
        } else {
          toast.error("Login unsuccessful: " + response.message);
        }
      })
      .addCase(login.rejected, (state, action) => {
        toast.error("Login failed: " + action.error.message);
        state.token = null;
      });
  },
});

export const { resetRedirectTo } = authSlice.actions;
export default authSlice.reducer;
