import styled from '@emotion/styled';
import { css } from '@emotion/react';

const wrapperDynamicStyles = ({ theme }) => css`
  display: flex;
  justify-content: space-between;
  width: 87.6%;
  height: 70px;
  margin-left: 14px;
  margin-bottom: 40px;
  padding: 14px 4px 14px 0;
  border-top: 1px solid ${theme.backgroundColors.pseudo};
  border-bottom: 1px solid ${theme.backgroundColors.pseudo};

  @media screen and (min-width: ${theme.breakpoints[1]}) {
    margin-left: 24px;
    width: 81.5%;
    padding: 14px 0;
  }
`;

const textDynamicStyles = ({ theme }) => css`
  width: 76px;
  color: ${theme.textColors.addButton};
  font-size: ${theme.fontSizes[3]};
  font-weight: ${theme.fontWeights.medium};
  letter-spacing: -0.28px;
`;

const buttonDynamicStyles = ({ theme }) => css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 36px;
  background-color: ${theme.backgroundColors.asideAddButton};
  border-radius: ${theme.radii.sm};
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
