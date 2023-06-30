import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { priorityIndicator } from '../Card.styled';

const dynamicStylesDetailsBox = ({ theme }) => css`
  color: ${theme.textColors.main};
  font-size: ${theme.fontSizes[1]};
  letter-spacing: -0.2px;
`;

export const Box = styled.div`
  ${dynamicStylesDetailsBox}
  display: flex;
  justify-content: space-between;
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

export const DeadlineBox = styled.div`
  display: flex;
  flex-direction: column;
`;
