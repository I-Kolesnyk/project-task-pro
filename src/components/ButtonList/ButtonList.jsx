import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useAllBoards, useBoard } from 'hooks';
import { List } from './ButtonListStyled';
import BoardButton from 'components/BoardButton';

function ButtonList() {
  const allBoards = useAllBoards(); 
  const navigate = useNavigate();
  

  useEffect(() => {
    const activeBoard = allBoards.boards.filter(board => board.active === true);
    navigate(`${activeBoard[0].title}`);
  }, [allBoards.boards, navigate]);

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
