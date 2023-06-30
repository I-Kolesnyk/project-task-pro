export const selectBoard = state => state.board;
export const selectOneBoardLoading = state => state.isLoading;
export const selectBoardId = state => state.board.board.board[0]._id;
export const selectColumns = state => state.board.board.board[0].columns;
