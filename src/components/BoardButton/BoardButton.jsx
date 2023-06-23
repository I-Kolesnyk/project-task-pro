import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';

import sprite from '../../assets/sprite.svg';
import {
  Svg,
  Wrapper,
  Title,
  ActiveSvg,
  IconsWrapper,
} from './BoardButton.styled';

function BoardButton({ name, boardName }) {
  const [isActive, setIsActive] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const navigate = useNavigate();

  useEffect(() => {
    if (name == boardName) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [boardName, name]);

  const handleActive = () => {
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
