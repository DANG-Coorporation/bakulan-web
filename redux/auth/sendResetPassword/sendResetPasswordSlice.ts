import { IResetPassword, sendResetPasswordApi } from "@/api/bakulan";
import { removeLocalStorage } from "@/utils/localStorage";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const sendResetPassword = createAsyncThunk(
  "sendResetPassword/sendResetPassword",
  async (data: IResetPassword) => {
    try {
      const response = await sendResetPasswordApi(data);
      removeLocalStorage("accessToken");
      removeLocalStorage("refreshToken");
      removeLocalStorage("user");

      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

const initialState = {
  status: "idle",
  data: {},
  error: {},
};

const sendResetPasswordSlice = createSlice({
  name: "sendResetPassword",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(sendResetPassword.pending, (state, _) => {
      state.status = "loading";
    });
    builder.addCase(sendResetPassword.fulfilled, (state, action) => {
      state.status = "success";
      state.data = action.payload;
    });
    builder.addCase(sendResetPassword.rejected, (state, action) => {
      state.status = "failed";
      state.error = "error";
    });
  },
});
