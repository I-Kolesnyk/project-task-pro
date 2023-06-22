
import { StyledLink } from './styled/WelcomePage.styled';

const WelcomePage = () => {
  return (
    <div>
      <StyledLink to="/auth/register">Registration</StyledLink>

      <StyledLink to="/auth/login">Log In</StyledLink>
    </div>
  );
};

export default WelcomePage;
