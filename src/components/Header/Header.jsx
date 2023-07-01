import ThemeDropdown from 'components/ThemeDrpdown/ThemeDropdown';
import sprite from '../../assets/sprite.svg';
import { StyledHeader, Svg, Button, Container } from './Header.styled';
import UserInfo from 'components/UserInfo/UserInfo';

function Header({ openSidebar }) {
  return (
    <StyledHeader>
      <Button type="button" onClick={openSidebar}>
        <Svg>
          <use href={sprite + '#menu'}></use>
        </Svg>
      </Button>
      <Container>
        <ThemeDropdown />
        <UserInfo />
      </Container>
    </StyledHeader>
  );
}

export default Header;
