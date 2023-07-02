import { createSlice } from '@reduxjs/toolkit';
import { filterByPriority } from './constants';

const filterInitialState = filterByPriority.all;

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    filterPriority: filterInitialState,
  },
  reducers: {
    filterTasksByPriority: {
      reducer: (state, { payload }) => {
        return { ...state, filterPriority: payload };
      },
    },
  },
});

export const { filterTasksByPriority } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
