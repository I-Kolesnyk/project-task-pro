import styled from '@emotion/styled';
import { css } from '@emotion/react';

const wrapperDynamicStyles = ({ theme }) => css`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid ${theme.backgroundColors.pseudo};
  border-bottom: 1px solid ${theme.backgroundColors.pseudo};

  @media screen and (min-width: ${theme.breakpoints[2]}) {
    width: 81.5%;
    height: 70px;
    padding: 14px 0;
  }
`;

const textDynamicStyles = ({ theme }) => css`
  color: ${theme.textColors.addButton};
  font-size: ${theme.fontSizes[3]};
  font-weight: ${theme.fontWeights.medium}
  letter-spacing: -0.28px;

  @media screen and (min-width: ${theme.breakpoints[2]}) {
    width: 76px;
  }
`;

const buttonDynamicStyles = ({ theme }) => css`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.backgroundColors.asideAddButton};
  border-radius: ${theme.radii.sm};

  @media screen and (min-width: ${theme.breakpoints[2]}) {
    width: 40px;
    height: 36px;
  }
`;

const svgDynamicStyles = ({ theme }) => css`
  stroke: ${theme.backgroundColors.iconFill};
`;

export const Wrapper = styled.div`
  ${wrapperDynamicStyles}
`;

export const Text = styled.p`
  ${textDynamicStyles}
`;

export const Button = styled.button`
  ${buttonDynamicStyles}
`;

export const Svg = styled.svg`
  ${svgDynamicStyles}
`;
