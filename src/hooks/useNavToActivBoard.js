const { useNavigate } = require('react-router-dom');
const { useAllBoards } = require('./useAllBoards');
const { useIsBoardsLoading } = require('./useIsBoardsLoading');
const { useOneBoardLoading } = require('./useOneBoardLoading');

export const useNavToActiveBoard = () => {
  const navigate = useNavigate();
  const allBoards = useAllBoards();
  const isLoading = useIsBoardsLoading();
  const isBoardLoading = useOneBoardLoading();
  const navigateToActive = () => {
    if (!isLoading) {
      if (allBoards.boards.length !== 0) {
        const activeBoard = allBoards.boards.find(
          board => board.active === true
        );
        if (!activeBoard) {
          return;
        }

        if (activeBoard) {
          console.log(activeBoard);
          if (!isBoardLoading) {
            navigate(`${activeBoard.title}`);
          }
        }
      }
    }
  };
  return { navigateToActive };
};
