import { useSelector } from 'react-redux';
import { selectBoardId } from 'redux/board/selectors';

export const useBoardId = () => useSelector(selectBoardId);