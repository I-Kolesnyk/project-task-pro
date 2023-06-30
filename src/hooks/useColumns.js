import { useSelector } from 'react-redux';
import { selectColumns } from 'redux/board/selectors';

export const useColumns = () => useSelector(selectColumns);
