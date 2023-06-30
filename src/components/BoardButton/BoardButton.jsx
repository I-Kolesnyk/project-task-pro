import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { updateBoardStatus } from 'redux/allBoards/operations';
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
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (params.boardName) {
      if (isActive) {
        console.log(name.toString(), params.boardName);
        if (name.toString() !== params.boardName) {
          dispatch(updateBoardStatus({ boardId: id, body: { active: false } }));
        }
      }
    }
  }, [dispatch, id, isActive, name, params.boardName]);

  const handleActive = () => {
    navigate(`${name}`);
    dispatch(updateBoardStatus({ boardId: id, body: { active: true } }));
  };

  const openModal = () => {
    setIsModalOpen(true);
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
