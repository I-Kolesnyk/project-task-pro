import styled from '@emotion/styled';
import { css } from '@emotion/react';

const userNameDynamicStyles = ({ theme }) => css`
  color: ${theme.textColors.main};
  font-size: ${theme.fontSizes[3]};
  font-weight: ${theme.fontWeights.medium};
  letter-spacing: -0.28px;
  margin-right: 8px;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 32px;
`;

export const Text = styled.p`
  ${userNameDynamicStyles};
`;
export const Img = styled.img`
  width: 32px;
  height: 32px;
`;
