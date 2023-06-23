import { useSelector } from 'react-redux';
import { selectAllBoards } from 'redux/allBoards/selectors';

export const useAllBoards = () => useSelector(selectAllBoards);
