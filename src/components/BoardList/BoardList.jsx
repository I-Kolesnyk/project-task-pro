import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
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
  const [isBoards, setIsBoards] = useState(false);

  useEffect(() => {
    if (allBoards.boards.length !== 0) {
      setIsBoards(true);
    }
  }, [allBoards.boards.length]);

  useEffect(() => {
    console.log('isBoards', isBoards);
    if (isBoards) {
      if (allBoards.boards.length !== 0) {
        const activeBoard = allBoards.boards.filter(
          board => board.active === true
        );
        console.log('activeBoard', activeBoard);
        if (activeBoard) {
          console.log('i get one board');
          dispatch(getBoardById(`${activeBoard[0]._id}`));
        }
      }
    }
  }, [allBoards.boards, dispatch, isBoards]);

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
