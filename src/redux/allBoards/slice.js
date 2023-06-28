import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getAllBoards, addNewBoard, updateBoardStatus } from './operations';

const initialState = {
  boards: [],
  isLoading: false,
};

export const allBoardsSlice = createSlice({
  name: 'boards',
  initialState,
  reducers: {
    removeBoards(state) {
      state.boards = [];
    },
  },
  extraReducers: builder =>
    builder
      .addCase(getAllBoards.fulfilled, (state, action) => {
        state.boards = action.payload.data;
      })
      .addCase(addNewBoard.fulfilled, (state, action) => {
        state.boards = state.boards.push(action.payload);
      })
      .addCase(updateBoardStatus.fulfilled, (state, action) => {
        const boardIdToUpdate = action.payload.data.board._id;
        const changedBoard = state.boards.boards.find(
          board => board._id === boardIdToUpdate
        );
        if (changedBoard) {
          changedBoard.active = action.payload.data.board.active;
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

const extraActions = [getAllBoards, addNewBoard, updateBoardStatus];

const getActions = type => extraActions.map(action => action[type]);

export const { removeBoards } = allBoardsSlice.actions;

export const boardsReducer = allBoardsSlice.reducer;
