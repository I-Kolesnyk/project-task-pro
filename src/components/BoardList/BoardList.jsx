import { useAllBoards, useIsBoardsLoading } from 'hooks';
import AddBoardButton from 'components/AddBoardButton';
import ButtonList from 'components/ButtonList/ButtonList';
import { Title, Wrapper } from './BoardList.styled';

function BoardList() { 
  const allBoards = useAllBoards();
  const isBoardsLoading = useIsBoardsLoading();

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
