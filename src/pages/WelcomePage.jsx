import Welcome from 'components/Welcome/Welcome';
import { WelcomePageContainer, StyledLink } from './styled/WelcomePage.styled';

const WelcomePage = () => {
  return (
    <WelcomePageContainer>
      <div>
        <Welcome />
        <StyledLink to="/auth/register">Registration</StyledLink>

        <StyledLink to="/auth/login">Log In</StyledLink>
      </div>
    </WelcomePageContainer>
  );
};

export default WelcomePage;
