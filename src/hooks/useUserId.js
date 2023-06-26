import { useSelector } from 'react-redux';
import { selectUserId } from 'redux/auth/selectors';

export const useUserId = () => useSelector(selectUserId);
