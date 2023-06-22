import { Link } from 'react-router-dom';
import AddBoardButton from 'components/AddBoardButton';
import { Title, Wrapper } from './BoardList.styled';

function BoardList() {
  return (
    <Wrapper>
      <Title>My boards</Title>
      {/* <Link to={`${boardName}`}>{boardName}</Link> */}
      <Link to={`boardNameExample`}>boardNameExample</Link>
      <AddBoardButton />
    </Wrapper>
  );
}

export default BoardList;
