import styled from '@emotion/styled';
import { css } from '@emotion/react';

const wrapperDynamicStyles = ({ theme }) => css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 61px;
  margin-bottom: 40px;
  height: calc(100vh - 611px);
  scroll-behavior: smooth;
  overflow-y: auto;
  @media only screen and (min-width: ${theme.breakpoints[1]}) {
    height: calc(100vh - 646px);
  }
`;

export const Wrapper = styled.div`
  ${wrapperDynamicStyles}
`;

const titleDynamicStyles = ({ theme }) => css`
  margin-bottom: 8px;
  align-self: flex-start;
  color: ${theme.textColors.secondary};
  font-size: ${theme.fontSizes[2]};
  letter-spacing: -0.24px;

  @media screen and (min-width: ${theme.breakpoints[1]}) {
    padding-left: 9.5%;
  }
`;

export const Title = styled.h2`
  ${titleDynamicStyles}
`;
