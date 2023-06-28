import styled from '@emotion/styled';
import { css } from '@emotion/react';

const priorityIndicator = (priority, theme) => {
  let priorityColor;

  switch (priority) {
    case 'high':
      priorityColor = theme.labelColors.green;

      break;
    case 'medium':
      priorityColor = theme.labelColors.pink;

      break;
    case 'low':
      priorityColor = theme.labelColors.lilac;

      break;
    default:
      priorityColor = theme.labelColors.gray;

      break;
  }
  return priorityColor;
};

const dynamicStylesWrapper = ({ priority, theme }) => css`
  position: relative;
  height: 154px;
  width: 335px;
  padding: 14px 20px 14px 24px;
  border-radius: ${theme.radii.md};
  background-color: ${theme.backgroundColors.cardBgColor};
  scroll-snap-align: start;

  &:not(:last-child) {
    margin-bottom: 8px;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 154px;
    border-left: 4px solid ${priorityIndicator(priority, theme)};
    border-bottom-left-radius: 4px;
    border-top-left-radius: 4px;
    scroll-snap-align: start;
  }

  &::after {
    content: '';
    position: absolute;
    left: 24px;
    top: 90px;
    width: 291px;
    border-bottom: 1px solid ${theme.backgroundColors.cardSeparator};
  }
`;
export const Wrapper = styled.li`
  ${dynamicStylesWrapper}
`;

const dynamicStylesTaskTitle = ({ theme }) => css`
  margin-bottom: 8px;
  font-weight: ${theme.fontWeights.semibold};
  color: ${theme.textColors.main};
`;

export const TaskTitle = styled.p`
  ${dynamicStylesTaskTitle}
`;

const dynamicStylesTaskDescription = ({ theme }) => css`
  position: relative;
  margin-bottom: 28px;
  color: ${theme.textColors.cardSecondary};
  -webkit-line-clamp: 2;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-size: ${theme.fontSizes[2]};
  line-height: 16px;
  letter-spacing: -0.24px;
`;

export const TaskDescription = styled.p`
  ${dynamicStylesTaskDescription}
`;

const dynamicStylePriorityBox = ({ theme }) => css`
  display: block;
  margin-right: 14px;
`;
export const PriorityBox = styled.div`
  ${dynamicStylePriorityBox}
`;

const dynamicStylesDetailsSuptitle = ({ theme }) => css`
  margin-bottom: 4px;
  color: ${theme.textColors.cardSecondary};
  font-size: ${theme.fontSizes[0]};
  letter-spacing: -0.16px;
`;
export const DetailsSuptitle = styled.p`
  ${dynamicStylesDetailsSuptitle}
`;

const dynamicStylesPriority = ({ priority, theme }) => css`
  display: flex;
  color: ${theme.textColors.main};
  font-size: ${theme.fontSizes[1]};
  letter-spacing: -0.2px;

  &::before {
    content: '';
    display: block;
    margin-right: 4px;
    width: 12px;
    height: 12px;
    border-radius: 12px;
    background-color: ${priorityIndicator(priority, theme)};
  }
`;
export const Priority = styled.p`
  ${dynamicStylesPriority}
`;

const dynamicStylesDetailsBox = ({ theme }) => css`
  color: ${theme.textColors.main};
  font-size: ${theme.fontSizes[1]};
  letter-spacing: -0.2px;
`;

export const Box = styled.div`
  ${dynamicStylesDetailsBox}
  display: flex;
  align-items: end;
  justify-content: space-between;
`;

export const DeadlineBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const IconList = styled.ul`
  display: flex;
  margin-left: 13px;
`;

const dynamicStylesSvg = ({ theme }) => css`
  fill: transparent;
  stroke: ${theme.backgroundColors.columnTitleIcon};
  transition: scale 250ms ease-in 0s;
  &:hover,
  &:focus {
    stroke: ${theme.backgroundColors.columnTitleIconHover};
    scale: 1.08;
  }
`;
const dynamicStylesBell = ({ theme }) => css`
  height: 16px;
  fill: transparent;
  stroke: ${theme.textColors.accent};
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

export const BellWrapper = styled.div`
  ${dynamicStylesBell}
`;
