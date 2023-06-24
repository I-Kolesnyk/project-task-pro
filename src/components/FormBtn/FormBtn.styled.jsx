import styled from '@emotion/styled';
import { css } from '@emotion/react';

const dynamicStylesBtn = ({ theme }) => css`
  width: 100%;
  padding: 10px 0 11px;
  border-radius: ${theme.radii.md};
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${theme.backgroundColors.formButton};

  color: ${theme.authColors.darkText};
  font-size: ${theme.fontSizes[3]};
  font-weight: ${theme.fontWeights.medium};
`;

export const BtnForm = styled.button`
  ${dynamicStylesBtn}
`;
