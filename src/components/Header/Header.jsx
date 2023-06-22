import ThemeDropdown from 'components/ThemeDrpdown/ThemeDropdown';
import { StyledHeader } from './Header.styled';

function Header() {
  return (
    <StyledHeader >
      <ThemeDropdown />
    </StyledHeader >
  );
}

export default Header;
