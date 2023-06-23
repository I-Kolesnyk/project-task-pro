import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router';

import sprite from '../../assets/sprite.svg';
import { Svg, Wrapper, Title } from './BoardButton.styled';

function BoardButton({ name, boardName }) {
  const [isActive, setIsActive] = useState(false);
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
    <Wrapper className={isActive ? 'active' : ''} onClick={handleActive}>
      <Svg width="18px" height="18px">
        <use href={sprite + '#project'}></use>
      </Svg>
      <Title>{name}</Title>
      {isActive && (
        <button>
          <Svg width="18px" height="18px">
            <use href={sprite + '#pencil'}></use>
          </Svg>
        </button>
      )}
      {isActive && (
        <button>
          <Svg width="16px" height="16px">
            <use href={sprite + '#trash'}></use>
          </Svg>
        </button>
      )}
    </Wrapper>
  );
}

export default BoardButton;
