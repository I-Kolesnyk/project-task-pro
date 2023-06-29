import styled from '@emotion/styled';
import { css } from '@emotion/react';

const listDynamicStyles = ({ theme }) => css`
  width: 100%;
  max-height: 195px;
  overflow-y: auto;
  scroll-snap-type: y mandatory;

  &::-webkit-scrollbar {
    width: 0px;
  }
`;

export const List = styled.ul`
  ${listDynamicStyles}
`;
