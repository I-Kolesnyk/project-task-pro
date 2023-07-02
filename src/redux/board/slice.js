import { createSlice } from '@reduxjs/toolkit';
import { getBoardById } from './operations';
import { addColumn, addCard, editCard } from './operations';

const initialState = {
  isLoading: false,
  info: {},
};

export const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    updateBoardColumns: (state, action) => {
      state.info.columns = action.payload;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(getBoardById.fulfilled, (state, action) => {
        const board = action.payload.data.board[0];
        state = {
          isLoading: false,
          info: board,
        };
        return state;
        // state.info = action.payload.data.board[0];
        // state.isLoading = false;
      })
      .addCase(getBoardById.pending, state => {
        state.isLoading = true;
      })
      .addCase(getBoardById.rejected, state => {
        state.isLoading = false;
      })
      .addCase(addColumn.fulfilled, (state, action) => {
        const newColumn = {
          ...action.payload.data.column,
          tasks: [],
        };
        state.info.columns.push(newColumn);
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
      })
      .addCase(editCard.fulfilled, (state, action) => {
        const changedTasksIdToUpdate = action.payload.data.task._id;
        // const changedTask = state.info.columns.tasks.find(
        //   task => task._id === changedTasksIdToUpdate
        // );
        console.log(state.info);
      }),
});

export const boardReducer = boardSlice.reducer;

export const { updateBoardColumns } = boardSlice.actions;
