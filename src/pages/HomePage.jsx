import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { getAllBoards } from 'redux/allBoards/operations';
import { useAllBoards } from 'hooks';
import { getBoardById } from 'redux/board/operations';

function HomePage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const allBoards = useAllBoards();
  console.log(allBoards);

  useEffect(() => {
    if (allBoards.length === 0) {
      dispatch(getAllBoards());
    }
    if (allBoards.length !== 0) {
      const activeBoard = allBoards.boards.filter(
        board => board.active === true
      );
      if (allBoards.boards.length !== 0 && activeBoard.length !== 0) {
        if (allBoards.boards.length !== 0 && activeBoard.length !== 0) {
          dispatch(getBoardById(`${activeBoard[0]._id}`));
          navigate(`${activeBoard[0].title}`);
        }
      }
    }
  }, [allBoards, dispatch, navigate]);

  return <p>Homepage</p>;
}

export default HomePage;
