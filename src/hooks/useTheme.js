import { useSelector } from 'react-redux';
import { selectTheme } from 'redux/theme/selectors';

export const useTheme = () => useSelector(selectTheme);