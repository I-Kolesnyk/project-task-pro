import styled from '@emotion/styled';
import { css } from '@emotion/react';

const sidebarDynamicStyles = ({ theme }) => css`
  z-index: 100;
  position: absolute;
  z-index: 100;
  top: 0;
  width: 225px;
  min-height: 100vh;
  margin: 0;
  background-color: ${theme.backgroundColors.asideMain};

  @media screen and (min-width: ${theme.breakpoints[1]}) {
    width: 260px;
  }

  @media screen and (min-width: ${theme.breakpoints[2]}) {
    position: static;
    float: left;
    width: 18%;
    min-height: 100vh;
  }
`;

export const StyledSidebar = styled.aside`
  ${sidebarDynamicStyles}
`;
