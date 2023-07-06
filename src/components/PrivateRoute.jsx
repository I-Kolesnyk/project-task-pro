import { Navigate } from 'react-router-dom';
import { useIsFetching, useIsLoggedIn } from 'hooks';

const PrivateRoute = ({ children, redirectTo = '/' }) => {
  const isLoggedIn = useIsLoggedIn();
  const isFetching = useIsFetching();
  const ShouldRedirect = !isLoggedIn && !isFetching;
  return ShouldRedirect ? (
    <Navigate to={redirectTo} replace={true} />
  ) : (
    children
  );
};
export default PrivateRoute;
