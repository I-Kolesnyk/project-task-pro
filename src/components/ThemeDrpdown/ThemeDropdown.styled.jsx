import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const selectStyles = {
  control: provided => ({
    ...provided,
    backgroundColor: 'theme.backgroundColors.header',
    border: '1px solid #161616',
    borderRadius: '4px',
    outline: 'none',
    padding: '0px',
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: '14px',
    fontWeight: '500',
    letterSpacing: '-0.28px',
    cursor: 'pointer',
  }),
  singleValue: provided => ({
    ...provided,
    color: 'red',
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
};

const selectWrapperDynamicStyles = ({ theme }) => css`
  /* width: 100px; 
  background-color: ${theme.backgroundColors.header};
  border: 1px solid ${theme.textColors.accent}; */
`;

export const SelectWrapper = styled.div`
  ${selectWrapperDynamicStyles}
`;
