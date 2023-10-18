import { checkTokenResetPasswordApi } from "@/api/bakulan";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const checkTokenResetPassword = createAsyncThunk(
  "checkTokenResetPassword/checkTokenResetPassword",
  async (token: string) => {
    try {
      const response = await checkTokenResetPasswordApi(token);
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

const checkTokenResetPasswordSlice = createSlice({
  name: "checkTokenResetPassword",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(checkTokenResetPassword.pending, (state, _) => {
      state.status = "loading";
    });
    builder.addCase(checkTokenResetPassword.fulfilled, (state, action) => {
      state.status = "success";
      state.data = action.payload;
    });
    builder.addCase(checkTokenResetPassword.rejected, (state, action) => {
      state.status = "failed";
      state.error = "error";
    });
  },
});

export const {} = checkTokenResetPasswordSlice.actions;

export default checkTokenResetPasswordSlice.reducer;
