import styled from '@emotion/styled';
import { css } from '@emotion/react';

const dynamicStylesBtn = ({ theme }) => css`
  width: 100%;
  padding: 14px 0;
  border-radius: ${theme.radii.md};

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${theme.authColors.lightButtonBackground};

  color: ${theme.authColors.darkText};
  font-size: ${theme.fontSizes[3]};
  font-weight: ${theme.fontWeights.medium};
`;

export const Btn = styled.button`
  ${dynamicStylesBtn}
`;
