import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { updateBoardStatus } from 'redux/allBoards/operations';
import sprite from '../../assets/sprite.svg';
import Modal from 'components/ModalWindow/ModalWindow';
import EditBoardForm from 'components/EditBoardForm/EditBoardForm';
import { useIsBoardsLoading } from 'hooks';
import {
  Svg,
  Wrapper,
  Title,
  ActiveSvg,
  IconsWrapper,
  IconButton,
} from './BoardButton.styled';
import { getBoardById } from 'redux/board/operations';

function BoardButton({ name, id, icon, isActive }) {
  const [isModalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();
  const isAllBoardsLoading = useIsBoardsLoading();
  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(isActive);
  }, [isActive]);

  useEffect(() => {
    // if (active && params.boardName) {
      if (name.toString() !== params.boardName) {
        // dispatch(updateBoardStatus({ boardId: id, body: { active: false } }));
        setActive(false);
      }
      if (name.toString() === params.boardName) {
        // dispatch(updateBoardStatus({ boardId: id, body: { active: false } }));
        setActive(true);
      }
    // }
  }, [dispatch, id, params.boardName, name, active]);

  const handleActive = () => {
    setActive(true);
    // dispatch(updateBoardStatus({ boardId: id, body: { active: true } }));
    dispatch(getBoardById(`${id}`));
    if (!isAllBoardsLoading) {
      navigate(`${name}`);
    }
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <Wrapper className={active ? 'active' : ''} onClick={handleActive}>
        <Svg width="18px" height="18px">
          <use href={sprite + `#${icon}`}></use>
        </Svg>
        <Title>{name}</Title>
        {active && (
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
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <EditBoardForm onClose={closeModal} />
        </Modal>
      )}
    </>
  );
}

export default BoardButton;
