import styled from '@emotion/styled';
import { css } from '@emotion/react';

const styledLoaderDynamicStyle = ({ theme }) => css`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 99;
  color: ${theme.textColors.accent};
`;

export const StyledLoader = styled.div`
  ${styledLoaderDynamicStyle}
`;
