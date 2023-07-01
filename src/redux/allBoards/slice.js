import { createSlice } from '@reduxjs/toolkit';
import { getAllBoards, addNewBoard, updateBoardStatus } from './operations';

const initialState = {
  boards: { boards: [] },
  isLoading: false,
};

export const allBoardsSlice = createSlice({
  name: 'boards',
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(getAllBoards.fulfilled, (state, action) => {
        state.boards = action.payload.data;
        state.isLoading = false;
      })
      .addCase(getAllBoards.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getAllBoards.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(addNewBoard.fulfilled, (state, action) => {
        state.boards.boards.push(action.payload.data.board);
      })
      .addCase(addNewBoard.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(addNewBoard.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(updateBoardStatus.fulfilled, (state, action) => {
        const boardIdToUpdate = action.payload.data.board._id;
        const changedBoard = state.boards.boards.find(
          board => board._id === boardIdToUpdate
        );
        if (changedBoard) {
          changedBoard.active = action.payload.data.board.active;
        }
        state.isLoading = false;
      })
      .addCase(updateBoardStatus.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(updateBoardStatus.rejected, (state, action) => {
        state.isLoading = false;
      }),
});

export const boardsReducer = allBoardsSlice.reducer;
