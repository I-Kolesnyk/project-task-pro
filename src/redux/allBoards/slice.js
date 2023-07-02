import { createSlice } from '@reduxjs/toolkit';
import { getAllBoards, addNewBoard, updateBoardStatus } from './operations';

const initialState = {
  info: [],
  isLoading: false,
};

export const allBoardsSlice = createSlice({
  name: 'boards',
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(getAllBoards.fulfilled, (state, action) => {
        state.info = action.payload.data.boards;
        state.isLoading = false;
      })
      .addCase(getAllBoards.pending, state => {
        state.isLoading = true;
      })
      .addCase(getAllBoards.rejected, state => {
        state.isLoading = false;
      })
      .addCase(addNewBoard.fulfilled, (state, action) => {
        state.info.push(action.payload.data.board);
      })
      .addCase(addNewBoard.pending, state => {
        state.isLoading = true;
      })
      .addCase(addNewBoard.rejected, state => {
        state.isLoading = false;
      })
      .addCase(updateBoardStatus.fulfilled, (state, action) => {
        const boardIdToUpdate = action.payload.data.board._id;
        const changedBoard = state.info.find(
          board => board._id === boardIdToUpdate
        );
        if (changedBoard) {
          changedBoard.active = action.payload.data.board.active;
        }
        // state.isLoading = false;
      }),
  // .addCase(updateBoardStatus.pending, (state, action) => {
  //   state.isLoading = true;
  // })
  // .addCase(updateBoardStatus.rejected, (state, action) => {
  //   state.isLoading = false;
  // }),
});

export const boardsReducer = allBoardsSlice.reducer;
