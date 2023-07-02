import { useAllBoards, useIsBoardsLoading } from 'hooks';
import AddBoardButton from 'components/AddBoardButton';
import ButtonList from 'components/ButtonList/ButtonList';
import { Title, Wrapper } from './BoardList.styled';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllBoards } from 'redux/allBoards/operations';
import { getBackgrounds } from 'redux/background/operations';
import Loader from 'components/Loader/Loader';

function BoardList() {
  const allBoards = useAllBoards();
  const isBoardsLoading = useIsBoardsLoading();
  const dispatch = useDispatch();

  useEffect(() => {
    // if (!isLoading) {
    dispatch(getAllBoards());
    dispatch(getBackgrounds());
    // }
  }, [dispatch]);

  return (
    <Wrapper>
      <Title>My boards</Title>
      {/* {!isBoardsLoading ? ( */}
      <>
        <AddBoardButton />
        {allBoards.length !== 0 && <ButtonList />}
      </>
      {/* ) : (<Loader/>)
    } */}
    </Wrapper>
  );
}

export default BoardList;
