import { Navigate } from 'react-router-dom';
import { useIsLoggedIn } from 'hooks';

const RestrictedRoute = ({
  children,
  redirectTo = '/',
  restricted = false,
}) => {
  const isLoggedIn = useIsLoggedIn();
  const shouldRedirect = isLoggedIn && restricted;
  return shouldRedirect ? (
    <Navigate to={redirectTo} replace={true} />
  ) : (
    children
  );
};

export default RestrictedRoute;
