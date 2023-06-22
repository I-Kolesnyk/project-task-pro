import ThemeDropdown from 'components/ThemeDrpdown/ThemeDropdown';
import sprite from '../../assets/sprite.svg';
import { StyledHeader, Svg, Button } from './Header.styled';

function Header() {
  return (
    <StyledHeader >
      <Button type="button">
        <Svg>
          <use href={sprite + '#menu'}></use>
        </Svg>
      </Button>
      <ThemeDropdown />
    </StyledHeader >
  );
}

export default Header;
