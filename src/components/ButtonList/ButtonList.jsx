import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useAllBoards, useBoard } from 'hooks';
import { List } from './ButtonListStyled';
import BoardButton from 'components/BoardButton';
import { useState } from 'react';

function ButtonList() {
  const allBoards = useAllBoards();
  const navigate = useNavigate();
  const oneBoard = useBoard();
  console.log('allBoards', allBoards);
  const [isBoards, setIsBoards] = useState(false);
  const [isBoard, setIsBoard] = useState(false)

  useEffect(() => {
    if (allBoards.boards.length !== 0) {
      setIsBoards(true);
    }
  }, [allBoards.boards.length]);

  useEffect(() => {
    if (oneBoard.board) {
      setIsBoard(true);
    }
  }, [oneBoard.board, setIsBoard]);

  useEffect(() => {
    if (isBoard) {
      const activeBoard = allBoards.boards.filter(
        board => board.active === true
      );
      navigate(`${activeBoard[0].title}`);
    }
  }, [allBoards.boards, isBoard, navigate]);

  return (
    isBoards && (
      <List>
        {allBoards.boards.length !== 0 &&
          allBoards.boards.map(({ _id, title, icon, active }) => (
            <li key={_id}>
              <BoardButton
                name={title}
                id={_id}
                icon={icon}
                isActive={active}
              />
            </li>
          ))}
      </List>
    )
  );
}

export default ButtonList;
