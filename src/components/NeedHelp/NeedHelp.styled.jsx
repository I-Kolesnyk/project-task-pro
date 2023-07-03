import styled from '@emotion/styled';
import { css } from '@emotion/react';

const ContainerDynamicStyles = ({ theme }) => css`
align-self: center;
  background-color: ${theme.backgroundColors.asideSecondary};
  border-radius: ${theme.radii.md};
  width: 197px;
  height: 238px;
  margin-bottom: 28px;
  margin-left:auto;
  margin-right: auto;
  padding: 15px;
  @media screen and (min-width: ${theme.breakpoints[1]}) {
    width: 212px;
    height: 272px;
    padding: 20px;
  }
`;
const textDynamicStyles = ({ theme }) => css`
  width: 150px;
  margin-bottom: 19px;
  color: ${theme.textColors.addButton};
  font-size: ${theme.fontSizes[2]};
  line-height: 1.34;
  letter-spacing: -0.24px;
  @media screen and (min-width: ${theme.breakpoints[1]}) {
    font-size: ${theme.fontSizes[3]};
    line-height: 1.4;
    letter-spacing: -0.28px;
  }
`;
const spanDynamicStyles = ({ theme }) => css`
  color: ${theme.textColors.accent};
`;
const buttonDynamicStyles = ({ theme }) => css`
  color: ${theme.textColors.addButton};
  font-size: ${theme.fontSizes[3]};
  font-weight: ${theme.fontWeights.medium};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20px;
  background-color: transparent;
`;

const svgDynamicStyles = ({ theme }) => css`
  stroke: ${theme.textColors.addButton};
`;

export const Container = styled.div`
  ${ContainerDynamicStyles}
`;

export const Image = styled.img`
  margin-bottom: 14px;
`;

export const Button = styled.button`
  ${buttonDynamicStyles}
`;

export const ButtonText = styled.span`
  margin-left: 8px;
`;

export const Text = styled.p`
  ${textDynamicStyles}
`;

export const Span = styled.span`
  ${spanDynamicStyles}
`;

export const Svg = styled.svg`
  ${svgDynamicStyles}
`;
