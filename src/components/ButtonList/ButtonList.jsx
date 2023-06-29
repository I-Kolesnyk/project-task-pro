import { useAllBoards} from 'hooks';
import BoardButton from 'components/BoardButton';
import { List } from './ButtonListStyled';

function ButtonList() {
  const allBoards = useAllBoards();

  return (
    <List>
      {allBoards.boards.length !== 0 &&
        allBoards.boards.map(({ _id, title, icon, active }) => (
          <li key={_id}>
            <BoardButton name={title} id={_id} icon={icon} isActive={active} />
          </li>
        ))}
    </List>
  );
}

export default ButtonList;
