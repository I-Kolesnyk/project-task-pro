import styled from '@emotion/styled';
import { css } from '@emotion/react';

const listDynamicStyles = ({ theme }) => css`
  width: 100%;
  min-height: 61px;
  margin-bottom: 40px;
  height: calc(100vh - 611px);
  scroll-behavior: smooth;
  overflow-y: auto;

  @media only screen and (min-width: ${theme.breakpoints[1]}) {
    height: calc(100vh - 646px);
  }

  &::-webkit-scrollbar {
    width: 0px;
  }
`;

export const List = styled.ul`
  ${listDynamicStyles}
`;
