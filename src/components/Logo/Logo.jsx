import sprite from 'assets/sprite.svg';
import { StyledLogo, StyledWrapper, StyledSpanLogo } from './Logo.styled';

const Logo = () => {
  return (
    <StyledWrapper href="/home">
      <StyledLogo width="32px" height="32px" className="logout-icon">
        <use href={`${sprite}#logo`} />
      </StyledLogo>
      <StyledSpanLogo>Task Pro</StyledSpanLogo>
    </StyledWrapper>
  );
};

export default Logo;
