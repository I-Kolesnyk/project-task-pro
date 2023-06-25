import styled from '@emotion/styled';
import { css } from '@emotion/react';

const dynamicWelcomeContainerStyles = ({ theme }) => css`
  margin-top: 211px;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-right: 20px;
  padding-left: 20px;

  @media only screen and (min-width: ${theme.breakpoints[1]}) {
    margin-top: 293px;
    width: 473px;
    padding-right: 0;
    padding-left: 0;
  }
`;

const dynamicThumbStyles = ({ theme }) => css`
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 24px;
  width: 166px;

  @media only screen and (min-width: ${theme.breakpoints[1]}) {
    width: 222px;
  }
`;

const dynamicTitleStyles = ({ theme }) => css`
  color: ${theme.authColors.darkText};
  font-size: ${theme.fontSizes[6]};
  font-weight: ${theme.fontWeights.semibold};
  letter-spacing: -1.12px;

  @media only screen and (min-width: ${theme.breakpoints[1]}) {
    font-size: ${theme.fontSizes[7]};
    letter-spacing: -1.6px;
  }
`;

const dynamicSvgStyles = ({ theme }) => css`
  width: 40px;
  height: 40px;
  margin-right: 14px;

  @media only screen and (min-width: ${theme.breakpoints[1]}) {
    width: 48px;
    height: 48px;
  }
`;

const dynamicTextStyles = ({ theme }) => css`
  margin-bottom: 28px;
  margin-right: auto;
  margin-left: auto;
  width: 335px;

  color: ${theme.authColors.darkText};
  text-align: center;
  line-height: 18px;
  letter-spacing: -0.28px;

  @media only screen and (min-width: ${theme.breakpoints[1]}) {
    width: 473px;
    margin-bottom: 48px;
  }
`;

export const WelcomeContainer = styled.div`
  ${dynamicWelcomeContainerStyles}
`;

export const Thumb = styled.div`
  ${dynamicThumbStyles}
`;

export const LogoThumb = styled.div`
  display: flex;
  align-items: center;
`;

export const Title = styled.h2`
  ${dynamicTitleStyles}
`;

export const Svg = styled.svg`
  ${dynamicSvgStyles}
`;

export const Text = styled.p`
  ${dynamicTextStyles}
`;
