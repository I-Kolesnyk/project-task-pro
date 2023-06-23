import { createSlice } from '@reduxjs/toolkit';
import { getAllBoards } from './operations';

const initialState = {
  boards: [],
};

const allBoardsSlice = createSlice({
  name: 'boards',
  initialState,
  extraReducers: builder =>
    builder.addCase(getAllBoards.fulfilled, (state, action) => {
      state.boards = action.payload;
    }),
});

export const allBoardsReducer = allBoardsSlice.reducer;
