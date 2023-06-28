export const selectStyles = {
  control: (provided, state) => ({
    ...provided,
    backgroundColor: 'theme.backgroundColors.header',
    border: 'none',
    borderRadius: '4px',
    outline: 'none',
    padding: '0px',
    color: 'rgba(255, 255, 255, 0.8)',
    fill: 'rgba(255, 255, 255, 0.8)',
    fontSize: '14px',
    fontWeight: '500',
    letterSpacing: '-0.28px',
    cursor: 'pointer',
    // boxShadow: state.isFocused ? 'none' : 'none',
    boxShadow: 'none',
  }),

  valueContainer: provided => ({
    ...provided,
    padding: '0px',
    color: 'rgba(255, 255, 255, 0.8)',
  }),

  placeholder: provided => ({
    ...provided,
    // color: 'hsla(0, 0%, 9%, 0.8)',
  }),

  indicatorSeparator: () => ({
    display: 'none',
  }),

  indicatorContainer: () => ({
    padding: '100px',
    fill: 'red',
  }),

  menu: state => ({
    padding: '18px 40px 18px 18px',
    fontSize: '14px',
    letterSspacing: '-0.28px',

    color: state.isSelected ? '#BEDBB0;' : 'rgba(255, 255, 255, 0.5)',

    borderRadius: '8px',
    border: '1px solid #BEDBB0',
    background: '#151515',
    boxShadow: '0px 4px 16px 0px rgba(17, 17, 17, 0.10)',
  }),

  menuList: () => ({
    padding: 'none',
  }),

  menuPortal: provided => ({
    ...provided,
    padding: '18px',
    backgroundColor: 'blue',
  }),
};
