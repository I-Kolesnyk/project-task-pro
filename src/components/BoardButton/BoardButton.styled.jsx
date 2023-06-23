import styled from '@emotion/styled';
import { css } from '@emotion/react';

const svgDynamicStyles = ({ theme }) => css`
  stroke: ${theme.backgroundColors.iconFill};
`;

const wrapperDynamicStyles = ({ theme }) => css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px 14px;
  background-color: ${theme.backgroundColors.asideSecondary};
  opacity: 0.4;
  &.active {
    opacity: 1;
  }
`;

const titleDynamicStyles = ({ theme }) => css`
  margin-left: 4px;
  margin-right: auto;
  color: ${theme.textColors.addButton}; 
  font-size: ${theme.fontSizes[3]};
  font-weight: ${theme.fontWeights.medium}
  letter-spacing: -0.28px;  
`;

export const Svg = styled.svg`
  ${svgDynamicStyles}
`;

export const Wrapper = styled.div`
  ${wrapperDynamicStyles}
`;

export const Title = styled.p`
  ${titleDynamicStyles}
`;
