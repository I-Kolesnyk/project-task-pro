import { createSelector } from '@reduxjs/toolkit';

export const selectAllBoards = state => state.boards.info;
export const selectIsBoardsLoading = state => state.boards.isLoading;

// export const selectActiveBoard = createSelector([selectAllBoards], boards => {
//   return boards.filter(board => board.active === 'true');
// });
