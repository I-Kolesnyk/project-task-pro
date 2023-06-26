import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const StyledLogo = styled.svg(`
    background-color: #1F1F1F;
    border-radius: 5px;
    fill: transparent;
`);

export const StyledWrapper = styled.a(`
    display:flex;
    justify-content: flex-start;
    align-items: center;
    gap:8px;
    margin-top: 24px;
    margin-left: 24px;
    margin-bottom: 60px;
`);

const dynamicTextColor = ({ theme }) => css`
  color: ${theme.textColors.addButton};
`;

export const StyledSpanLogo = styled.span`
  ${dynamicTextColor}
  font-size: 16px;
  font-family: 'Poppins';
  font-weight: 600;
  letter-spacing: -0.64px;
`;
