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
  font-size: ${theme.fontSizes[4]};
  font-style: normal;
  line-height: normal;
  font-weight: ${theme.fontWeights.semibold};
  letter-spacing: -0.64px;
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
`;
