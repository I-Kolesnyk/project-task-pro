import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useTheme, useUserId } from 'hooks';
import { editTheme } from 'redux/auth/operations';
import { selectStyles } from './ThemeDropdown.styled';
import Select from 'react-select';

function ThemeDropdown() {
  const dispatch = useDispatch();
  const userId = useUserId();

  const defaultValues = {
    theme: useTheme(),
  };

  const { register } = useForm({ defaultValues: defaultValues });
  const [selectedOption, setSelectedOption] = useState(null);
  const [optionValue, setOptionValue] = useState(null);

  const options = [
    { value: 'light', label: 'Light' },
    { value: 'dark', label: 'Dark' },
    { value: 'violet', label: 'Violet' },
  ];

  const onChange = option => {
    setOptionValue(option);
    setSelectedOption(null);
    if (option && option.value !== '') {
      const userData = { id: userId, body: { theme: option.value } };

      const userDataTheme = userData.body.theme;

      setOptionValue(userDataTheme);
      dispatch(editTheme(userData));
    }
  };

  const themeSelectStyles = selectStyles(selectedOption, optionValue);

  return (
    <div>
      <Select
        name="theme"
        {...register('theme')}
        onChange={onChange}
        options={options}
        styles={themeSelectStyles}
        placeholder="Theme"
        isSearchable={false}
        value={selectedOption}
        // menuIsOpen={true}
      />
    </div>
  );
}

export default ThemeDropdown;
