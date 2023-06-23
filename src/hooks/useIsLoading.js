import { useSelector } from 'react-redux';
import { selectIsLoading } from 'redux/auth/selectors';

export const useIsLoading = () => useSelector(selectIsLoading);