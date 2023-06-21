import styled from '@emotion/styled';
import { css } from '@emotion/react';

const selectWrapperDynamicStyles = ({ theme }) => css`
  width: 100px;
  height: 107px;
  background-color: ${theme.backgroundColors.header};
  border: 1px solid ${theme.textColors.accent};
`;

export const SelectWrapper = styled.div`
  ${selectWrapperDynamicStyles}
`;
