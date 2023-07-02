const { useAllBoards } = require('./useAllBoards');
const { useIsBoardsLoading } = require('./useIsBoardsLoading');
const { useOneBoardLoading } = require('./useOneBoardLoading');

export const useNavToActiveBoard = () => {
  const allBoards = useAllBoards();
  const isLoading = useIsBoardsLoading();
  const isBoardLoading = useOneBoardLoading();
  const navigateToActive = () => {
    if (!isLoading) {
      if (allBoards.length !== 0) {
        const activeBoard = allBoards.find(board => board.active === true);
        if (!activeBoard) {
          return;
        }

        if (activeBoard) {
          if (!isBoardLoading) {
            return activeBoard.title;
          }
        }
      }
    }
  };
  return navigateToActive();
};
