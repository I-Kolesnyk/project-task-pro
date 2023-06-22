import styled from '@emotion/styled';
import { css } from '@emotion/react';

const dynamicStylesBtn = ({ theme }) => css`
  width: 287px;
  padding: 14px 0;
  border-radius: ${theme.radii.md};
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${theme.authColors.lightButtonBackground};

  color: ${theme.authColors.darkText};
  font-size: ${theme.fontSizes[3]};
  font-weight: ${theme.fontWeights.medium};
  @media screen and (max-width: ${theme.breakpoints[0]}) {
    width: 80%;
  }

  @media screen and (min-width: ${theme.breakpoints[1]}) {
    width: 344px;
  }
`;

export const Btn = styled.button`
  ${dynamicStylesBtn}
`;
