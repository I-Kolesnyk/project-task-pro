import { useParams } from 'react-router-dom';

import AddBoardButton from 'components/AddBoardButton';
import BoardButton from 'components/BoardButton';
import { useAllBoards } from 'hooks';
import { Title, Wrapper, List } from './BoardList.styled';

function BoardList() {
  const { boardName } = useParams();
  const allBoards = useAllBoards();

  return (
    <Wrapper>
      <Title>My boards</Title>
      <AddBoardButton />
      <List>
        {allBoards.length!== 0 && allBoards.boards.map(({ _id, title, icon, active }) => (
          <li key={_id}>
            <BoardButton
              name={title}
              boardName={boardName}
              id={_id}
              icon={icon}
              isActive={active}
            />
          </li>
        ))}
      </List>
    </Wrapper>
  );
}

export default BoardList;
