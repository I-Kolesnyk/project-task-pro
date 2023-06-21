import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';

import { useTheme } from 'hooks';
import { setTheme } from 'redux/theme/slice';
import { SelectWrapper } from './ThemeDropdown.styled';

function ThemeDropdown() {
  const dispatch = useDispatch();

  const defaultValues = {
    theme: useTheme(),
  };

  const { register } = useForm({ defaultValues: defaultValues });

  const onChange = data => {
    dispatch(setTheme(data.target.value));
  };

  return (
    <SelectWrapper>
      <select
        name="theme"
        {...register('theme')}
        onChange={data => onChange(data)}
      >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="violet">Violet</option>
      </select>
    </SelectWrapper>
  );
}

export default ThemeDropdown;
