import { useSelector } from 'react-redux';
import { selectUserEmail } from 'redux/auth/selectors';

export const useUserEmail = () => useSelector(selectUserEmail);
