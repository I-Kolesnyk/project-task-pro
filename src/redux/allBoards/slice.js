import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getAllBoards, addNewBoard, updateBoardStatus } from './operations';

const initialState = {
  boards: [],
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
      })
      .addCase(addNewBoard.fulfilled, (state, action) => {
        state.boards = state.boards.push(action.payload);
      })
      .addCase(updateBoardStatus.fulfilled, (state, action) => {
        const changedBoard = state.boards.filter(
          board => board.id === action.payload._id
        );
        changedBoard.active = action.payload.active;
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

const extraActions = [getAllBoards, addNewBoard, updateBoardStatus];

const getActions = type => extraActions.map(action => action[type]);

export const boardsReducer = allBoardsSlice.reducer;
