import { useAllBoards } from 'hooks';
import BoardButton from 'components/BoardButton';
import { List } from './ButtonListStyled';

function ButtonList() {
  const allBoards = useAllBoards();

  return (
    <List>
      {allBoards.length !== 0 &&
        allBoards.map(({ _id, title, icon, active }) => (
          <BoardButton
            key={_id}
            name={title}
            id={_id}
            icon={icon}
            isActive={active}
          />
        ))}
    </List>
  );
}

export default ButtonList;
