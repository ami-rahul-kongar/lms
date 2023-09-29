import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "./Helper";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialState = {
  redirectTo: null,
  registerTo: null,
  isLoggedIn: false,
  Data: [],
  status: "idle",
  Edit: null,
};

export const creating = createAsyncThunk("create", async (formData) => {
  try {
    const res = await axiosInstance.post(`/product/create`, formData);
    return res.data;
  } catch (error) {
    throw error;
  }
});

export const ListData = createAsyncThunk("product", async () => {
  try {
    const res = await axiosInstance.post(`/product/list`);
    return res.data;
  } catch (error) {
    throw error;
  }
});

export const productRemove = createAsyncThunk("removedata", async (formdata) => {
  try {
    const res = await axiosInstance.post(`/product/remove`, formdata);
    return res.data;
  } catch (error) {
    throw error;
  }
});

export const CoursesUpdate = createAsyncThunk("updatedata", async (formData) => {
  try {
    const res = await axiosInstance.post(`/product/update`, formData);
    return res.data;
  } catch (error) {
    throw error;
  }
});

export const CoursesEdit = createAsyncThunk("product/detail", async (id) => {
  try {
    const res = await axiosInstance.get(`/product/detail/${id}`);
    return res.data;
  } catch (error) {
    throw error;
  }
});

const CrudSlice = createSlice({
  name: "crud",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(creating.pending, (state) => {
        state.status = "loading";
      })
      .addCase(creating.fulfilled, (state, { payload }) => {
        if (payload?.status === 200) {
          localStorage.setItem("title", payload?.data?.title);
        } else if (payload?.status === 201) {
          toast(payload?.message);
        }
        state.status = "idle";
      })
      .addCase(creating.rejected, (state, action) => {
        state.status = "idle";
      })
      .addCase(ListData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(ListData.fulfilled, (state, { payload }) => {
        if (payload?.status === 200) {
          state.Data = payload.data;
        }
        state.status = "idle";
      })
      .addCase(ListData.rejected, (state, action) => {
        state.status = "idle";
      })
      .addCase(productRemove.pending, (state) => {
        state.status = "loading";
      })
      .addCase(productRemove.fulfilled, (state, { payload }) => {
        if (payload?.status === 200) {
          state.Data = state.Data.filter((item) => item._id !== payload?.data?.deletedProductId);
          toast.success("Product deleted successfully!");
        } else {
          toast.error("Failed to delete product. Please try again later.");
        }
        state.status = "idle";
      })
      .addCase(productRemove.rejected, (state) => {
        toast.error("An error occurred while deleting the product. Please try again later.");
        state.status = "idle";
      })
      .addCase(CoursesUpdate.fulfilled, (state, { payload }) => {
        if (payload?.status === 200) {
          const updatedProductIndex = state.Data.findIndex((item) => item._id === payload?.data?._id);
          if (updatedProductIndex !== -1) {
            state.Data[updatedProductIndex] = payload?.data;
          }
          toast.success("Product updated successfully!");
        } else if (payload?.status === 201) {
          toast.error("Failed to update product. Please try again later.");
        } else {
          toast.error(payload?.message || "Failed to update product. Please try again later.");
        }
        state.status = "idle";
      })
      .addCase(CoursesUpdate.rejected, (state) => {
        toast.error("An error occurred while updating the product. Please try again later.");
        state.status = "idle";
      })
      .addCase(CoursesEdit.fulfilled, (state, { payload }) => {
        state.Edit = payload?.data;
      });
  },
});

export default CrudSlice.reducer;
