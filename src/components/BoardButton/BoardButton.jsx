import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
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
import { deleteBoard, getBoardById } from 'redux/board/operations';

function BoardButton({ name, id, icon }) {
  const [isModalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();
  const isAllBoardsLoading = useIsBoardsLoading();
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (name.toString().toLowerCase() !== params.boardName) {
      setActive(false);
    }
    if (name.toString().toLowerCase() === params.boardName) {
      setActive(true);
    }
  }, [dispatch, params.boardName, name]);

  const handleActive = () => {
    setActive(true);
    dispatch(getBoardById(`${id}`));
    if (!isAllBoardsLoading) {
      navigate(`${name.toLowerCase()}`);
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
            <IconButton type="button" onClick={() => dispatch(deleteBoard(id))}>
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
