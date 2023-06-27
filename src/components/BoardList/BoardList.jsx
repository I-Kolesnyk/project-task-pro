import { useParams } from 'react-router-dom';

import AddBoardButton from 'components/AddBoardButton';
import BoardButton from 'components/BoardButton';
import { useAllBoards } from 'hooks';
import { Title, Wrapper, List } from './BoardList.styled';

function BoardList() {
  const { boardName } = useParams();
  const allBoards = useAllBoards();
  console.log(allBoards);

  return (
    <Wrapper>
      <Title>My boards</Title>
      <AddBoardButton />
      <List>
        {allBoards.map(({ _id, title, icon, active }) => (
          <li>
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
