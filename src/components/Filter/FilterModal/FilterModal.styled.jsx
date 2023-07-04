import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const dynamicStylesFilterModalWindow = ({ theme }) => css`
  position: relative;
  width: 252px;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 164px;
    width: 252px;
    border-bottom: 1px solid ${theme.backgroundColors.cardSeparator};
  }

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 41px;
    width: 252px;
    border-bottom: 1px solid ${theme.backgroundColors.cardSeparator};
  }
`;

export const FilterModalWindow = styled.div`
  ${dynamicStylesFilterModalWindow}
`;

const dynamicFilterTitle = ({ theme }) => css`
  margin-bottom: 28px;
  color: ${theme.textColors.main};
  font-size: ${theme.fontSizes[5]};
  font-style: normal;
  font-weight: ${theme.fontWeights.medium};
  line-height: normal;
  letter-spacing: -0.36px;
`;
export const FilterTitle = styled.p`
  ${dynamicFilterTitle}
`;
