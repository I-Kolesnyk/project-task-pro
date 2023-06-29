import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import AddBoardButton from 'components/AddBoardButton';
import BoardButton from 'components/BoardButton';
import { useAllBoards, useIsBoardsLoading } from 'hooks';
import { Title, Wrapper, List } from './BoardList.styled';
import { useDispatch } from 'react-redux';
import { getBoardById } from 'redux/board/operations';
import ButtonList from 'components/ButtonList/ButtonList';

function BoardList() {
  const { boardName } = useParams();
  const allBoards = useAllBoards();
  const isBoardsLoading = useIsBoardsLoading();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (allBoards.boards.length !== 0) {
      const activeBoard = allBoards.boards.filter(
        board => board.active === true
      );
      console.log("activeBoard", activeBoard)
      if (activeBoard) {
        dispatch(getBoardById(`${activeBoard[0]._id}`));
      }
    }
  }, [allBoards.boards, dispatch]);

  return (
    <Wrapper>
      <Title>My boards</Title>
      {!isBoardsLoading && (
        <>
          <AddBoardButton />
          {allBoards.boards.length !== 0 && <ButtonList />}
        </>
      )}
    </Wrapper>
  );
}

export default BoardList;
