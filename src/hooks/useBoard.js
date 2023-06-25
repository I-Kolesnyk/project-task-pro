import { useSelector } from 'react-redux';
import { selectBoard } from 'redux/board/selectors';

export const useBoard = () => useSelector(selectBoard);
