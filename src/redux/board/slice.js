import { createSlice } from '@reduxjs/toolkit';
import { getBoardById } from './operations';

const initialState = {
  board: {
    title: 'test',
    id: '111',
    columns: [
      {
        title: 'first',
        id: 'first',
        cards: [
          { title: 'card-1-1', id: 'c11' },
          { title: 'card-1-2', id: 'c12' },
          { title: 'card-1-3', id: 'c13' },
        ],
      },
      {
        title: 'second',
        id: 'second',
        cards: [
          { title: 'card-2-1', id: 'c21' },
          { title: 'card-2-2', id: 'c22' },
          { title: 'card-2-3', id: 'c23' },
        ],
      },
      {
        title: 'third',
        id: 'third',
        cards: [
          { title: 'card-3-1', id: 'c31' },
          { title: 'card-3-2', id: 'c32' },
          { title: 'card-3-3', id: 'c33' },
        ],
      },
    ],
  },
};
const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    setBoard(state, actions) {
      state.board = actions.payload;
    },
  },
  extraReducers: builder =>
    builder.addCase(getBoardById.fulfilled, (state, action) => {
      state.board = action.payload;
    }),
});

export const { setBoard } = boardSlice.actions;
export const boardReducer = boardSlice.reducer;
