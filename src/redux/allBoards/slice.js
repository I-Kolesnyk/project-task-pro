import { createSlice } from '@reduxjs/toolkit';
import { getAllBoards, addNewBoard } from './operations';

const initialState = {
  boards: [],
};

const allBoardsSlice = createSlice({
  name: 'boards',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(getAllBoards.fulfilled, (state, action) => {
        state.boards = action.payload;
      })
      .addCase(addNewBoard.fulfilled, (state, action) => {
        state.boards = state.boards.push(action.payload);
      }),
});

export const allBoardsReducer = allBoardsSlice.reducer;
