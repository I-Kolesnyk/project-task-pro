import { useSelector } from 'react-redux';
import { selectUserAvatar } from 'redux/auth/selectors';

export const useUserAvatar = () => useSelector(selectUserAvatar);
