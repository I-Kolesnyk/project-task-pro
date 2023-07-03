import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const priorityIndicator = (priority, theme) => {
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
  height: 35px;
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

export const Box = styled.div`
  display: flex;
  align-items: end;
  justify-content: space-between;
`;

const dynamicStylesBell = ({ time, theme }) => css`
  height: 16px;
  fill: ${time < 0 ? 'rgba(255, 3, 3, 0.901)' : 'transparent'};
  stroke: ${time < 0 ? 'transparent' : theme.textColors.accent};
`;

export const BellWrapper = styled.div`
  ${dynamicStylesBell}
`;
