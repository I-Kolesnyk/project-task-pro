import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';

export const useIsLoggedIn = () => useSelector(selectIsLoggedIn);