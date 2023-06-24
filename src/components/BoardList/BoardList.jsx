import { useParams } from 'react-router-dom';

import AddBoardButton from 'components/AddBoardButton';
import BoardButton from 'components/BoardButton';
import { Title, Wrapper, List } from './BoardList.styled';

function BoardList() {
  const { boardName } = useParams();

  return (
    <Wrapper>
      <Title>My boards</Title>
      <AddBoardButton />
      <List>
        <li>
          <BoardButton name={"test"} boardName={boardName} />
        </li>
        <li>
          <BoardButton name={14} boardName={boardName} />
        </li>
      </List>
    </Wrapper>
  );
}

export default BoardList;
