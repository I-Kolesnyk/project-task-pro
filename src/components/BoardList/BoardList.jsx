import { useAllBoards } from 'hooks';
import AddBoardButton from 'components/AddBoardButton';
import ButtonList from 'components/ButtonList/ButtonList';
import { Title } from './BoardList.styled';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllBoards } from 'redux/allBoards/operations';
import { getBackgrounds } from 'redux/background/operations';

function BoardList() {
  const allBoards = useAllBoards();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBoards());
    dispatch(getBackgrounds());
  }, [dispatch]);

  return (
    <>
      <Title>My boards</Title>
      <AddBoardButton />
      {allBoards.length !== 0 && <ButtonList />}
    </>
  );
}

export default BoardList;
