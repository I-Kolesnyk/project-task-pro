import AuthTabs from 'components/AuthTabs/AuthTabs';
import { ToastWrapper } from 'components/ToastContainer/ToastContainer';
import { AuthContainer } from './styled/AuthPage.styled';

const AuthPage = () => {
  return (
    <>
      <AuthContainer>
        <AuthTabs />
      </AuthContainer>
      <ToastWrapper />
    </>
  );
};

export default AuthPage;
