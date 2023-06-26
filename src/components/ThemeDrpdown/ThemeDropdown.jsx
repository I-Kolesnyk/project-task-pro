import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useTheme, useUserId } from 'hooks';
import editTheme from 'redux/auth/operations/editTheme';
import { SelectWrapper } from './ThemeDropdown.styled';

function ThemeDropdown() {
  const dispatch = useDispatch();
  const userId = useUserId();
  console.log(userId)

  const defaultValues = {
    theme: useTheme(),
  };

  const { register } = useForm({ defaultValues: defaultValues });

  const onChange = data => {
    const userData = { id: userId, theme: data.target.value };
    console.log(userData)
    dispatch(editTheme(userData));
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
