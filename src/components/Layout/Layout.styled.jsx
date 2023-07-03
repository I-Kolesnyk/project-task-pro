import styled from '@emotion/styled';
import { css } from '@emotion/react';

const mainDynamicStyles = ({ theme }) => css`
  background-color: ${theme.backgroundColors.main};
  overflow: hidden;
  height: calc(100vh - 60px);
  width: 100%;
  @media screen and (min-width: ${theme.breakpoints[1]}) {
    height: calc(100vh - 68px);
  }
  @media screen and (min-width: ${theme.breakpoints[2]}) {
    float: right;
    width: 82%;
  }
`;

export const StyledMain = styled.main`
  ${mainDynamicStyles}
`;
