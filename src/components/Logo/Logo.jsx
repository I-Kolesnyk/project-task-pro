import sprite from 'assets/sprite.svg';
import { StyledLogo, StyledWrapper, StyledSpanLogo } from './Logo.styled';

const Logo = () => {
  return (
    <StyledWrapper>
      <StyledLogo width="32px" height="32px">
        <use href={`${sprite}#logo1`} />
      </StyledLogo>
      <StyledSpanLogo>Task Pro</StyledSpanLogo>
    </StyledWrapper>
  );
};

export default Logo;
