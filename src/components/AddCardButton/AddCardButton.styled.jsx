import styled from '@emotion/styled';
import { css } from '@emotion/react';

const dynamicStyledAddCardButton = ({ theme }) => css`
  display: flex;
  align-items: center;
  width: 335px;
  padding: 14px 89px;
  background-color: ${theme.backgroundColors.formButton};
  border-radius: ${theme.radii.md};
  color: ${theme.textColors.button};
  font-weight: ${theme.fontWeights.medium};
  letter-spacing: -0.28px;
  transition: scale 250ms ease-in 0s;
  &:hover,
  &focus {
    scale: 1.05;
  }
`;

const dynamicStilesSvg = ({ theme }) => css`
  width: 14px;
  height: 14px;
  stroke: ${theme.backgroundColors.addCardIconStroke};
`;

const dynamicStylesBox = ({ theme }) => css`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
  width: 28px;
  height: 28px;
  background-color: ${theme.backgroundColors.addCardIconFill};
  border-radius: 8px;
`;

export const Button = styled.button`
  ${dynamicStyledAddCardButton}
`;

export const Box = styled.span`
  ${dynamicStylesBox};
`;

export const Svg = styled.svg`
  ${dynamicStilesSvg}
`;
