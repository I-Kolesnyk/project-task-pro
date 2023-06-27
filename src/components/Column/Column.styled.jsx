import styled from '@emotion/styled';
import { css } from '@emotion/react';

const wrapperDynamicStyles = ({ theme }) => css`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 335px;
  height: 618px;
  margin-left: 20px;
  margin-right: 34px;

  @media only screen and (min-width: ${theme.breakpoints[1]}) {
    height: 780px;
  }

  @media only screen and (min-width: ${theme.breakpoints[2]}) {
    height: 618px;
  }
`;

const taskTitleDynamicStyles = ({ theme }) => css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 14px;
  padding: 18px 20px 17px;
  border-radius: ${theme.radii.md};
  color: ${theme.textColors.main};
  background-color: ${theme.backgroundColors.pageButton};
`;

const taskListDynamicStyles = ({ theme }) => css`
  position: absolute;
  top: 70px;
  left: 0;
  height: 478px;
  width: 347px;
  overflow-y: auto;
  scroll-snap-type: y mandatory;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background-color: ${theme.backgroundColors.scrollBar};
    border-radius: 12px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 12px;
    background-color: ${theme.backgroundColors.scrollBarThumb};
  }
`;

const dynamicStylesSvg = ({ theme }) => css`
  width: 16px;
  height: 16px;
  fill: transparent;

  stroke: inherit;
  transition: stroke 250ms ease-in 0s;
  &:hover,
  &:focus {
    stroke: inherit;
  }
`;

const dynamicStylesButton = ({ theme }) => css`
  display: block;
  height: 16px;
  transition: scale 250ms ease-in 0s;
  stroke: ${theme.backgroundColors.columnTitleIcon};
  &:hover,
  &:focus {
    stroke: ${theme.backgroundColors.columnTitleIconHover};
    scale: 1.08;
  }
`;

export const Wrapper = styled.div`
  ${wrapperDynamicStyles}
`;

export const TaskTitle = styled.p`
  ${taskTitleDynamicStyles}
`;

export const TaskList = styled.ul`
  ${taskListDynamicStyles}
`;

export const IconList = styled.ul`
  display: flex;
  align-items: center;
  & > li:not(:last-child) {
    margin-right: 8px;
  }
`;

export const Svg = styled.svg`
  ${dynamicStylesSvg}
`;

export const IconButton = styled.button`
  ${dynamicStylesButton}
`;
