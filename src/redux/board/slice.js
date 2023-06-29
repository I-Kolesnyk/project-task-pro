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
      .addMatcher(isAnyOf(...getActions('fulfilled')), handleFulfilled)
      .addMatcher(isAnyOf(...getActions('pending')), handlePending)
      .addMatcher(isAnyOf(...getActions('rejected')), handleRejected),

  // .addCase(addCard.fulfilled, (state, action) => {
  //   const columnIdToUpdate = action.payload.data.column;
  //   const changedColumn = state.board.columns.find(
  //     board => board._id === columnIdToUpdate
  //   );
  // })
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
