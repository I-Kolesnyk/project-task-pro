import { createSlice, isAnyOf } from '@reduxjs/toolkit';
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
      })
      .addCase(addColumn.fulfilled, (state, action) => {
        state.board.board[0].columns.push(action.payload.data);
      })
      .addCase(addCard.fulfilled, (state, action) => {
        const columnIdToUpdate = action.payload.data.taks.column;
        console.log(columnIdToUpdate)
        const changedColumn = state.board.board[0].columns.find(
          column => column._id === columnIdToUpdate
        );
        console.log(changedColumn)
        if (changedColumn) {
          changedColumn.tasks.push(action.payload.data.taks);
        }
      })
      .addMatcher(isAnyOf(...getActions('fulfilled')), handleFulfilled)
      .addMatcher(isAnyOf(...getActions('pending')), handlePending)
      .addMatcher(isAnyOf(...getActions('rejected')), handleRejected),
});

const handleFulfilled = state => {
  state.isLoading = false;
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = state => {
  state.isLoading = false;
};

const extraActions = [addColumn, addCard];

const getActions = type => extraActions.map(action => action[type]);

export const boardReducer = boardSlice.reducer;
