import { createSlice } from '@reduxjs/toolkit';
import { getBackgrounds } from './operations';

const initialState = {
  backgrounds: {},
  isLoading: false,
};

export const backgroundsSlice = createSlice({
  name: 'backgrounds',
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(getBackgrounds.fulfilled, (state, action) => {       
        state.backgrounds = action.payload.data;
        state.isLoading = false;
      })
      .addCase(getBackgrounds.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getBackgrounds.rejected, (state, action) => {
        state.isLoading = false;
      }),
});

export const backgroundsReducer = backgroundsSlice.reducer;
