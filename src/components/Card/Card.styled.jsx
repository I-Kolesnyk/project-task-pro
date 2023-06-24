import styled from '@emotion/styled';
import { css } from '@emotion/react';

const wrapperDynamicStyles = ({ theme }) => css`
  height: 80px;
  width: 130px;
  border: 2px solid green;
`;

export const Wrapper = styled.div`
  ${wrapperDynamicStyles}
`;
