import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { getAllBoards } from 'redux/allBoards/operations';
import { useAllBoards } from 'hooks';
import { selectActiveBoard } from 'redux/allBoards/selectors';
import { useSelector } from 'react-redux';

function HomePage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const allBoards = useAllBoards();
  // const activeBoard = useSelector(selectActiveBoard);
  // console.log(activeBoard);
  

  useEffect(() => {
    dispatch(getAllBoards());
  }, [dispatch]);

  if (allBoards !== 0) {
    navigate(`${allBoards[0].title}`);
  }

  return <p>Homepage</p>;
}

export default HomePage;
