import { loginApi } from "@/api/bakulan";
import { ILogin } from "@/common/interface/auth.interface";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loginAppApi = createAsyncThunk(
  "login/loginAppApi",
  async (data: ILogin) => {
    try {
      const response = await loginApi(data);
      if (response.status !== 200) throw new Error("Error" + response.status);
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);

const initialState = {
  status: "idle",
  data: {},
  error: {},
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginAppApi.pending, (state, _) => {
      state.status = "loading";
    });
    builder.addCase(loginAppApi.fulfilled, (state, action) => {
      state.status = "success";
      state.data = action.payload;
    });
    builder.addCase(loginAppApi.rejected, (state, action) => {
      state.status = "failed";
      state.error = "error";
    });
  },
});

export const {} = loginSlice.actions;

export default loginSlice.reducer;
