import { useSelector } from 'react-redux';
import { selectIsBoardsLoading } from 'redux/allBoards/selectors';

export const useIsBoardsLoading = () => useSelector(selectIsBoardsLoading);