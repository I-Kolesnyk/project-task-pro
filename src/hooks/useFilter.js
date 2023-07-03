import { selectFilter } from 'redux/filter/selectors';
import { useSelector } from 'react-redux';

export const useFilter = () => useSelector(selectFilter);
