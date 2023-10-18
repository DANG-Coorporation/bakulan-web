import { createTokenForgetPasswordApi } from "@/api/bakulan";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const forgotPasswordApi = createAsyncThunk(
  "forgotPassword/forgotPasswordApi",
  async (email: string) => {
    try {
      const response = await createTokenForgetPasswordApi(email);
      if (response.status !== 200) throw new Error("Error" + response.status);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);

const initialState = {
  loading: false,
  error: "",
  success: false,
};

const forgotPasswordSlice = createSlice({
  name: "forgotPassword",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(forgotPasswordApi.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(forgotPasswordApi.fulfilled, (state) => {
      state.loading = false;
      state.success = true;
    });
    builder.addCase(forgotPasswordApi.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message!;
    });
  },
});

export const {} = forgotPasswordSlice.actions;

export default forgotPasswordSlice.reducer;
