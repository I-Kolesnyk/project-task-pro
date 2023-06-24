import styled from '@emotion/styled';
import { css } from '@emotion/react';

const dynamicTextColor = ({ theme }) => css`
  color: ${theme.textColors.addButton};
`;

export const StyledLogOutBtn = styled.button(`
position: absolute;
left: 24px;
bottom: 24px;
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
