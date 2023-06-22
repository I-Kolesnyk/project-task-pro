import AddBoardButton from 'components/AddBoardButton';
import { Title, Wrapper } from './BoardList.styled';

function BoardList() {
  return (
    <Wrapper>
      <Title>My boards</Title>
      <AddBoardButton />
    </Wrapper>
  );
}

export default BoardList;
