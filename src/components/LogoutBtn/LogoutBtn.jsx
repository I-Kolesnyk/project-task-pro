import sprite from '../../assets/sprite.svg';
import { StyledLogOutBtn, StyledSpan } from './LogoutBtn.styled';

const LogoutBtn = () => {
  function onClick() {
    console.log('log out req');
  }

  return (
    <StyledLogOutBtn onClick={onClick}>
      <svg width="32px" height="32px">
        <use href={`${sprite}#logout`} />
      </svg>
      <StyledSpan>Log out</StyledSpan>
    </StyledLogOutBtn>
  );
};

export default LogoutBtn;
