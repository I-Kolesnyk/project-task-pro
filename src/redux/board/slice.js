import { createSlice } from '@reduxjs/toolkit';
import { getBoardById } from './operations';
import { addColumn, addCard } from './operations';

const initialState = {
  isLoading: false,
  info: {},
};

export const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(getBoardById.fulfilled, (state, action) => {
        state.info = action.payload.data.board[0];
        state.isLoading = false;
      })
      .addCase(getBoardById.pending, state => {
        state.isLoading = true;
      })
      .addCase(getBoardById.rejected, state => {
        state.isLoading = false;
      })
      .addCase(addColumn.fulfilled, (state, action) => {
        state.info.columns.push(action.payload.data.column);
      })
      .addCase(addCard.fulfilled, (state, action) => {
        const columnIdToUpdate = action.payload.data.taks.column;
        console.log(columnIdToUpdate);
        const changedColumn = state.info.columns.find(
          column => column._id === columnIdToUpdate
        );
        console.log(changedColumn);
        if (changedColumn) {
          changedColumn.tasks.push(action.payload.data.taks);
        }
      }),
});

export const boardReducer = boardSlice.reducer;
