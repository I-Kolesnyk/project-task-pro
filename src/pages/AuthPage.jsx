import AuthTabs from 'components/AuthTabs/AuthTabs';
import { AuthContainer } from './styled/AuthPage.styled';

const AuthPage = () => {
  return (
    <AuthContainer>
      <AuthTabs />
    </AuthContainer>
  );
};

export default AuthPage;
