import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { updateBoardStatus } from 'redux/allBoards/operations';
import { getBoardById } from 'redux/board/operations';
import sprite from '../../assets/sprite.svg';
import {
  Svg,
  Wrapper,
  Title,
  ActiveSvg,
  IconsWrapper,
  IconButton,
} from './BoardButton.styled';

function BoardButton({ name, id, icon, isActive }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const { boardName } = useParams();
  const openModal = () => {
    setIsModalOpen(true);
  };
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (name.toString() === boardName) {
  //     dispatch(updateBoardStatus({ boardId: id, body: { active: true } }));
  //   } else {
  //     dispatch(updateBoardStatus({ boardId: id, body: { active: false } }));
  //   }
  // }, [boardName, dispatch, id, name]);

  const handleActive = () => {
    // dispatch(getBoardById(id));
    setTimeout(navigate(`${name}`), 2000);
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
            <IconButton type="button" onClick={openModal}>
              <ActiveSvg width="18px" height="18px">
                <use href={sprite + '#pencil'}></use>
              </ActiveSvg>
            </IconButton>
            <IconButton type="button">
              <ActiveSvg width="16px" height="16px">
                <use href={sprite + '#trash'}></use>
              </ActiveSvg>
            </IconButton>
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
