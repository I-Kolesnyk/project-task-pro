import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';

import { updateBoardStatus } from 'redux/allBoards/operations';
import { getBoardById } from 'redux/board/operations';
import sprite from '../../assets/sprite.svg';
import {
  Svg,
  Wrapper,
  Title,
  ActiveSvg,
  IconsWrapper,
} from './BoardButton.styled';

function BoardButton({ name, boardName, id, icon, isActive }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();  
  const openModal = () => {
    setIsModalOpen(true);
  };
  const navigate = useNavigate();

  useEffect(() => {
    if (name.toString() === boardName) {
      dispatch(updateBoardStatus({ boardId: id, body: { active: true } }));
    } else {
      dispatch(updateBoardStatus({ boardId: id, body: { active: false } }));
    }
  }, [boardName, dispatch, id, name]);

  const handleActive = () => {
    dispatch(getBoardById(id));
    navigate(`${name}`);
  };
  return (
    <>
      <Wrapper className={isActive ? 'active' : ''} onClick={handleActive}>
        <Svg width="18px" height="18px">
          <use href={sprite + '#project'}></use>
        </Svg>
        <Title>{name}</Title>
        {isActive && (
          <IconsWrapper>
            <button type="button" onClick={openModal}>
              <ActiveSvg width="18px" height="18px">
                <use href={sprite + '#pencil'}></use>
              </ActiveSvg>
            </button>
            <button type="button">
              <ActiveSvg width="16px" height="16px">
                <use href={sprite + '#trash'}></use>
              </ActiveSvg>
            </button>
          </IconsWrapper>
        )}
      </Wrapper>
      {isModalOpen && (
        <p>модалка для редагування дошки</p>
        // <Modal setIsModalOpen={setIsModalOpen}>
        //   {/* <EditBoardModal /> */}
        // </Modal>
      )}
    </>
  );
}

export default BoardButton;
