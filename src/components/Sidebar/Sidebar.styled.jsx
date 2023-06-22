import styled from '@emotion/styled';
import { css } from '@emotion/react';

const sidebarDynamicStyles = ({ theme }) => css`
  position: absolute;
  width: 225px;
  flex-grow: 1;
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

const sidebarContainerDynamicStyles = ({ theme }) => css`
  width: 225px;

  background-color: ${theme.backgroundColors.asideMain} @media screen and
    (min-width: ${theme.breakpoints[1]}) {

  }
`;

export const StyledSidebar = styled.aside`
  ${sidebarDynamicStyles}
`;

export const SidebarContainer = styled.div`
  ${sidebarContainerDynamicStyles}
`;
