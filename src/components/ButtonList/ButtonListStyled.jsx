import styled from '@emotion/styled';
import { css } from '@emotion/react';

const listDynamicStyles = ({ theme }) => css`
  width: 100%;
`;

export const List = styled.ul`
  ${listDynamicStyles}
`;