import { useSelector } from 'react-redux';
import { selectOneBoardLoading } from 'redux/board/selectors';

export const useOneBoardLoading = () => useSelector(selectOneBoardLoading);