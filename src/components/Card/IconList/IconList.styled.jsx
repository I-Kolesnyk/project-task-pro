import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const IconList = styled.ul`
  display: flex;
  margin-left: 13px;
`;

const dynamicStylesSvg = ({ theme }) => css`
  fill: transparent;
  stroke: ${theme.backgroundColors.columnTitleIcon};
  transition: scale 250ms ease-in 0s, stroke 250ms ease-in 0s;
  &:hover,
  &:focus {
    stroke: ${theme.backgroundColors.columnTitleIconHover};
    scale: 1.08;
  }
`;
export const IconListItem = styled.li`
  height: 16px;
  &:not(:last-child) {
    margin-right: 8px;
  }
`;
export const IconBtn = styled.button`
  display: block;
  height: 16px;
  ${dynamicStylesSvg}
`;
