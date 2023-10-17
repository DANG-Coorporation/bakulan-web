import { registerApi } from "@/api/bakulan";
import { apiStatus } from "@/common/constant/apiStatus";
import { IRegister } from "@/common/interface/registerApi";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const registerOwnerApi = createAsyncThunk(
  "register/registerOwnerApi",
  async (data: IRegister) => {
    try {
      const response = await registerApi(data);
      if (response.status !== 200) throw new Error("Error" + response.status);
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);

const initialState = {
  status: apiStatus.idle,
  data: {},
  error: {},
};

const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      registerOwnerApi.pending,
      (state, _: PayloadAction<undefined>) => {
        state.status = apiStatus.loading;
      }
    );
    builder.addCase(
      registerOwnerApi.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.status = apiStatus.success;
        state.data = action.payload;
      }
    );
    builder.addCase(
      registerOwnerApi.rejected,
      (state, action: PayloadAction<any>) => {
        state.status = apiStatus.failed;
        state.error = action.payload;
      }
    );
  },
});

export const {} = registerSlice.actions;

export default registerSlice.reducer;
