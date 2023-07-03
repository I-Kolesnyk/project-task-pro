import styled from '@emotion/styled';
import { css } from '@emotion/react';

const sidebarDynamicStyles = ({ theme }) => css`
  /* z-index: 100; */
  position: absolute;
  top: 0;
  width: 225px;
  height: 100vh;
  margin: 0;
  background-color: ${theme.backgroundColors.asideMain};

  @media screen and (min-width: ${theme.breakpoints[1]}) {
    width: 260px;
  }

  @media screen and (min-width: ${theme.breakpoints[2]}) {
    position: static;
    float: left;
    width: 18%;
    height: 100vh;
  }
`;

const containerDynamicStyles = ({ theme }) => css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 24px;
  padding-bottom: 24px;
  height: 100%;
`;

export const StyledSidebar = styled.aside`
  ${sidebarDynamicStyles}
`;

export const Container = styled.div`
  ${containerDynamicStyles}
`;
