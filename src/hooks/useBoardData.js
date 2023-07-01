import { useSelector } from 'react-redux';
import { selectBoardData } from 'redux/board/selectors';

export const useBoardData = () => useSelector(selectBoardData);
