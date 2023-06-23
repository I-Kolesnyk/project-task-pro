import { useSelector } from 'react-redux';
import { selectUserName } from 'redux/auth/selectors';

export const useUserName = () => useSelector(selectUserName);