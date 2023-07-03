import styled from '@emotion/styled';
import { css } from '@emotion/react';

const headerDynamicStyles = ({ theme }) => css`
  display: flex;
  justify-content: space-between;
  height: 60px;
  padding: 14px 20px;
  background-color: ${theme.backgroundColors.header};

  @media screen and (min-width: ${theme.breakpoints[1]}) {
    height: 68px;
    padding: 18px 32px;
  }

  @media screen and (min-width: ${theme.breakpoints[2]}) {
    float: right;
    width: 82%;    
    padding: 18px 32px;
  }
`;

const buttonDynamicStyles = ({ theme }) => css`
  @media screen and (min-width: ${theme.breakpoints[2]}) {
    display: none;
  }
`;

const svgDynamicStyles = ({ theme }) => css`
  width: 24px;
  height: 24px;
  stroke: ${theme.backgroundColors.burger};

  @media screen and (min-width: ${theme.breakpoints[1]}) {
    width: 32px;
    height: 32px;    
`;

const containerDynamicStyles = ({ theme }) => css`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 14px;
  margin-left: auto;
`;

export const StyledHeader = styled.header`
  ${headerDynamicStyles}
`;

export const Svg = styled.svg`
  ${svgDynamicStyles}
`;

export const Button = styled.button`
  ${buttonDynamicStyles}
`;

export const Container = styled.div`
  ${containerDynamicStyles}
`;
