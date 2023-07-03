import { createSlice } from '@reduxjs/toolkit';
import {
  getAllBoards,
  addNewBoard,
  updateBoardStatus,
  editBoardById,
} from './operations';

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
        state.isLoading = false;
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
      })
      // .addCase(updateBoardStatus.pending, (state, action) => {
      //   state.isLoading = true;
      // })
      // .addCase(updateBoardStatus.rejected, (state, action) => {
      //   state.isLoading = false;
      // }),
      .addCase(editBoardById.fulfilled, (state, action) => {
        const { boardId, title, icon, background } = action.payload.data.board;
        const index = state.info.findIndex(board => board._id === boardId);
        if (index !== -1) {
          state.info[index].title = title;
          state.info[index].icon = icon;
          state.info[index].background = background;
          state.isLoading = false;
        }
      })
      .addCase(editBoardById.pending, state => {
        state.isLoading = true;
      })
      .addCase(editBoardById.rejected, state => {
        state.isLoading = false;
      })
      ,
});

export const boardsReducer = allBoardsSlice.reducer;
