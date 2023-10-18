import { getProfileApi } from "@/api/bakulan";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getProfile = createAsyncThunk("profile/getProfile", async () => {
  try {
    const response = await getProfileApi();
    return response.data;
  } catch (error) {
    throw error;
  }
});
interface IProfileState {
  data: any;
  loading: boolean;
  error: string;
}

const initialState: IProfileState = {
  data: {},
  loading: false,
  error: "",
};
const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProfile.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getProfile.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(getProfile.rejected, (state, action) => {
      state.loading = false;
      state.error = "Error";
    });
  },
});

export const {} = profileSlice.actions;

export default profileSlice.reducer;
