import sprite from '../../assets/sprite.svg';
import { StyledLogOutBtn, StyledSpan } from './LogoutBtn.styled';
import { useDispatch } from 'react-redux';
import { userLogOut } from 'redux/auth/operations';

const LogoutBtn = () => {
  const dispatch = useDispatch();
  function onClick() {
    console.log('log out req');
    dispatch(userLogOut());
  }

  return (
    <StyledLogOutBtn onClick={onClick}>
      <svg width="32px" height="32px" className="logout-icon">
        <use href={`${sprite}#logout`} />
      </svg>
      <StyledSpan>Log out</StyledSpan>
    </StyledLogOutBtn>
  );
};

export default LogoutBtn;
