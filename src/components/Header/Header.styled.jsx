import styled from '@emotion/styled';
import { css } from '@emotion/react';

const headerDynamicStyles = ({ theme }) => css`
  display: flex;
  justify-content: space-between;
  align-items: center;

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
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 25px;

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
  }
`;

const containerDynamicStyles = ({ theme }) => css`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 14px;
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

const dynamicPhraseStyles = ({ theme }) => css`
  font-size: ${theme.fontSizes[2]};
  margin-right: auto;
  margin-left: auto;

  color: ${theme.textColors.main};
  font-style: normal;
  text-align: center;
  line-height: 16px;
  letter-spacing: -0.24px;
  display: none;
  @media screen and (min-width: ${theme.breakpoints[1]}) {
    font-size: ${theme.fontSizes[3]};
  }
  @media screen and (min-width: ${theme.breakpoints[2]}) {
    display: block;
  }
`;

export const Phrase = styled.p`
  ${dynamicPhraseStyles}
`;
