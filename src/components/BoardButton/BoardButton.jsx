import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { updateBoardStatus } from 'redux/allBoards/operations';
import sprite from '../../assets/sprite.svg';
import Modal from 'components/ModalWindow/ModalWindow';
import EditBoardForm from 'components/EditBoardForm/EditBoardForm';
import { getBoardById } from 'redux/board/operations';
import { useOneBoardLoading, useIsBoardsLoading, useBoardId } from 'hooks';
import {
  Svg,
  Wrapper,
  Title,
  ActiveSvg,
  IconsWrapper,
  IconButton,
} from './BoardButton.styled';

function BoardButton({ name, id, icon, isActive }) {
  const [isModalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();
  const isBoardLoading = useOneBoardLoading();
  const isAllBoardsLoading = useIsBoardsLoading();


  useEffect(() => {
    
    if (isActive) {
      console.log(name.toString(), params.boardName);
      if (name.toString() !== params.boardName) {
        dispatch(updateBoardStatus({ boardId: id, body: { active: false } }));
        console.log ("i am inactive", name.toString())
      }  
    }
  }, [dispatch, id, isActive, name, params.boardName]);

  const handleActive = () => {
    dispatch(updateBoardStatus({ boardId: id, body: { active: true } }));
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
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <EditBoardForm onClose={closeModal} />
        </Modal>
      )}
    </>
  );
}

export default BoardButton;
