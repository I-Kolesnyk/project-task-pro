import styled from '@emotion/styled';
import { css } from '@emotion/react';

const dynamicImgStyles = ({ theme }) => css`
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 14px;
  @media only screen and (min-width: ${theme.breakpoints[1]}) {
    margin-bottom: 24px;
  }
`;

export const Img = styled.img`
  ${dynamicImgStyles}
`;
