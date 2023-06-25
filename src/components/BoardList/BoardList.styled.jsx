import styled from '@emotion/styled';
import { css } from '@emotion/react';

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

const wrapperDynamicStyles = ({ theme }) => css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const listDynamicStyles = ({ theme }) => css`
  width: 100%;
`;

export const Title = styled.h2`
  ${titleDynamicStyles}
`;

export const Wrapper = styled.div`
  ${wrapperDynamicStyles}
`;

export const List = styled.ul`
  ${listDynamicStyles}
`;
