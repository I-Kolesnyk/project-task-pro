import sprite from '../../assets/sprite.svg';
import { StyledLogOutBtn, StyledSpan, Icon } from './LogoutBtn.styled';
import { useDispatch } from 'react-redux';
import { userLogOut } from 'redux/auth/operations';
import { removeBoard } from 'redux/board/slice';

const LogoutBtn = () => {
  const dispatch = useDispatch();
  function onClick() {
    dispatch(userLogOut());
    dispatch(removeBoard())
  }

  return (
    <StyledLogOutBtn onClick={onClick}>
      <Icon width="32px" height="32px">
        <use href={`${sprite}#logout`} />
      </Icon>
      <StyledSpan>Log out</StyledSpan>
    </StyledLogOutBtn>
  );
};

export default LogoutBtn;
