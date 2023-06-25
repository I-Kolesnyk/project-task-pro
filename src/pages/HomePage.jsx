import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllBoards } from 'redux/allBoards/operations';

function HomePage() {
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getAllBoards);
  }, []);

  return <p>Homepage</p>;
}

export default HomePage;
