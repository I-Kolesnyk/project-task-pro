import AuthTabs from 'components/AuthTabs/AuthTabs';

const AuthPage = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 'auto',
        width: '1440px',
        height: '100vh',
        background:
          'linear-gradient(180deg, rgba(196, 196, 196, 0.00) 25%, #BEDBB0 92.19%)',
      }}
    >
      <AuthTabs />
    </div>
  );
};

export default AuthPage;
