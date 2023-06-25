import styled from '@emotion/styled';
import { css } from '@emotion/react';

const svgDynamicStyles = ({ theme }) => css`
  stroke: ${theme.backgroundColors.borderIcon};
  fill: transparent;
`;

const activeSvgDynamicStyles = ({ theme }) => css`
  stroke: ${theme.backgroundColors.borderIcon};
  fill: transparent;
  opacity: 0.5;
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

const iconsWrapperDynamicStyles = ({ theme }) => css`
  display: flex;
  gap: 8px;
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

export const ActiveSvg = styled.svg`
  ${activeSvgDynamicStyles}
`;

export const Wrapper = styled.div`
  ${wrapperDynamicStyles}
`;

export const Title = styled.p`
  ${titleDynamicStyles}
`;

export const IconsWrapper = styled.div`
  ${iconsWrapperDynamicStyles}
`;
