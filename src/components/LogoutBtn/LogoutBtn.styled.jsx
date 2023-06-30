import styled from '@emotion/styled';
import { css } from '@emotion/react';

const dynamicTextColor = ({ theme }) => css`
  color: ${theme.textColors.addButton};
`;

export const StyledLogOutBtn = styled.button(`
display: flex;
gap: 14px;
justify-content: center;
align-items: center;
margin-top: auto;
width: 105px;
height: 32px;
`);

export const StyledSpan = styled.span`
  ${dynamicTextColor}
  font-size: 16px;
  font-family: Poppins;
  font-weight: 500;
`;

const IconDynamicStyles = ({ theme, selected }) => css`
  width: 32px;
  height: 32px;

  stroke: ${theme.logOutIcon.logOutIconStroke};

  cursor: pointer;

  @media screen and (min-width: ${theme.breakpoints[3]}) {
    margin-left: 24px;
    width: 212px;
    height: 272px;
    padding: 20px;
  }
`;

export const Icon = styled.svg`
  ${IconDynamicStyles}
`;
