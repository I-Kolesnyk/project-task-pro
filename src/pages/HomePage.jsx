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
  const activeBoard = allBoards.filter(board => board.active === true);
  console.log(activeBoard);

  useEffect(() => {
    if (activeBoard.length !== 0 && allBoards.length !== 0) {
      dispatch(getAllBoards());
      if (allBoards.length !== 0) {
        dispatch(getBoardById(`${activeBoard[0]._id}`));
        navigate(`${activeBoard[0].title}`);
      }
    }
  }, [activeBoard, allBoards, dispatch, navigate]);

  return <p>Homepage</p>;
}

export default HomePage;
