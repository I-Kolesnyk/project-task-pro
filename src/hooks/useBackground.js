import { useSelector } from 'react-redux';
import { selectAllBackgrounds } from 'redux/background/selectors';

export const useBackground = () => useSelector(selectAllBackgrounds);