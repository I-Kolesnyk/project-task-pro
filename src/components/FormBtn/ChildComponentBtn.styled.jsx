import { css } from '@emotion/react';
import styled from '@emotion/styled';

const containerDynamicStyles = ({ theme }) => css`
  width: 28px;
  height: 28px;
  border-radius: ${theme.radii.sm};
  background-color: ${theme.backgroundColors.formButtonSvgBg};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 8px;

  & + p {
    color: ${theme.textColors.button};
    letter-spacing: -0.28px;
  }
`;
const svgDynamicStyles = ({ theme }) => css`
  stroke: ${theme.backgroundColors.formButtonSvg};
`;

export const Svg = styled.svg`
  ${svgDynamicStyles}
`;

export const ContainerSvg = styled.div`
  ${containerDynamicStyles}
`;
