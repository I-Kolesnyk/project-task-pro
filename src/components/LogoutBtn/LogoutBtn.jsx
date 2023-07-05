import Loader from 'components/Loader/Loader';
import sprite from '../../assets/sprite.svg';
import { StyledLogOutBtn, StyledSpan, Icon } from './LogoutBtn.styled';
import { useDispatch } from 'react-redux';
import { userLogOut } from 'redux/auth/operations';
import { useIsUserLoading } from 'hooks';

const LogoutBtn = () => {
  const dispatch = useDispatch();
  const isLoading = useIsUserLoading();

  function onClick() {
    dispatch(userLogOut());
  }

  return isLoading ? (
    <Loader />
  ) : (
    <StyledLogOutBtn onClick={onClick}>
      <Icon width="32px" height="32px">
        <use href={`${sprite}#logout`} />
      </Icon>
      <StyledSpan>Log out</StyledSpan>
    </StyledLogOutBtn>
  );
};

export default LogoutBtn;
