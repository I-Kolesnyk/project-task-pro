import { useSelector } from 'react-redux';
import { selectTheme } from 'redux/auth/selectors';

export const useTheme = () => useSelector(selectTheme);