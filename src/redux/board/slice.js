import { createSlice } from '@reduxjs/toolkit';
import { getBoardById } from './operations';
import { addColumn, addCard } from './operations';

const initialState = {
  isLoading: false,
  board: {
    board: [],
    columns: [],
  },
};

export const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(getBoardById.fulfilled, (state, action) => {
        state.board = action.payload.data;
        state.isLoading = false;
      })
      .addCase(getBoardById.pending, state => {
        state.isLoading = true;
      })
      .addCase(getBoardById.rejected, state => {
        state.isLoading = false;
      })
      .addCase(addColumn.fulfilled, (state, action) => {
        state.board.board[0].columns.push(action.payload.data);
      })
      .addCase(addCard.fulfilled, (state, action) => {
        const columnIdToUpdate = action.payload.data.taks.column;
        console.log(columnIdToUpdate);
        const changedColumn = state.board.board[0].columns.find(
          column => column._id === columnIdToUpdate
        );
        console.log(changedColumn);
        if (changedColumn) {
          changedColumn.tasks.push(action.payload.data.taks);
        }
      }),
});

export const boardReducer = boardSlice.reducer;
