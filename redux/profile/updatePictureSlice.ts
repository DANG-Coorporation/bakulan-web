import { updateProfilePictureApi } from "@/api/bakulan";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const updateProfilePicture = createAsyncThunk(
  "updatePictureSlice/updateProfilePicture",
  async (file: File) => {
    try {
      const response = await updateProfilePictureApi(file);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

const initialState = {
  data: null,
  loading: false,
  error: "",
};

const updatePictureSlice = createSlice({
  name: "updatePicture",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(updateProfilePicture.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(updateProfilePicture.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(updateProfilePicture.rejected, (state, action) => {
      state.loading = false;
      state.error = "Error";
    });
  },
});

export const {} = updatePictureSlice.actions;

export default updatePictureSlice.reducer;
