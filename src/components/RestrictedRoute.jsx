import { Navigate } from 'react-router-dom';
import { useIsLoggedIn } from 'hooks';

const RestrictedRoute = ({ children, redirectTo = '/' }) => {
  const isLoggedIn = useIsLoggedIn();
  return isLoggedIn ? <Navigate to={redirectTo} replace={true} /> : children;
};

export default RestrictedRoute;
