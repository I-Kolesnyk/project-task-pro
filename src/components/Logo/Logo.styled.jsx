import styled from '@emotion/styled';
import { css } from '@emotion/react';

const wrapperDynamicStyles = ({ theme }) => css`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;  
  margin-left: 24px;
  margin-bottom: 60px;
  &::before {
    content: '';
    width: 32px;
    height: 32px;
    background-color: ${theme.logo.bcg};
    cursor: pointer;
    border-radius: ${theme.radii.md};
  }
`;

const logoDynamicStyles = ({ theme }) => css`
  fill: ${theme.logo.icon};
  position: absolute;
`;

const dynamicTextColor = ({ theme }) => css`
  color: ${theme.textColors.addButton};
`;

export const StyledWrapper = styled.div`
  ${wrapperDynamicStyles}
`;

export const StyledLogo = styled.svg`
  ${logoDynamicStyles}
`;

export const StyledSpanLogo = styled.span`
  ${dynamicTextColor}
  font-size: 16px;
  font-family: 'Poppins';
  font-weight: 600;
  letter-spacing: -0.64px;
`;
