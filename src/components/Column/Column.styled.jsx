import styled from '@emotion/styled';
import { css } from '@emotion/react';

const wrapperDynamicStyles = ({ theme }) => css`
 
  height: 600px;
  width: 250px;
  border: 2px solid blue;
`;

export const Wrapper = styled.div`
  ${wrapperDynamicStyles}
`;
