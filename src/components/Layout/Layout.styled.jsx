import styled from '@emotion/styled';
import { css } from '@emotion/react';

const mainDynamicStyles = ({ theme }) => css`
  background-color: ${theme.backgroundColors.main};
  @media screen and (min-width: ${theme.breakpoints[2]}) {
    float: right;
    width: 82%;
    height: 91.1vh;
  }
`;

export const StyledMain = styled.main`
  ${mainDynamicStyles}
`;
