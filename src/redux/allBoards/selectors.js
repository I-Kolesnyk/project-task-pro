import { createSelector } from '@reduxjs/toolkit';

export const selectAllBoards = state => state.boards.boards;
export const selectIsBoardsLoading = state => state.isLoading;

// export const selectActiveBoard = createSelector([selectAllBoards], boards => {
//   return boards.filter(board => board.active === 'true');
// });
