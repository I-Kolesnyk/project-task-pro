import { css } from '@emotion/react';
import styled from '@emotion/styled';

const dynamicStyle = ({ theme }) =>
  css`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;

    max-width: 1440px;
    height: 100vh;

    background: linear-gradient(
      180deg,
      rgba(196, 196, 196, 0) 25%,
      #bedbb0 92.19%
    );

    /* border-radius: ${theme.radii.md};

    color: ${theme.authColors.darkText};
    font-size: ${theme.fontSizes[3]};
    font-weight: ${theme.fontWeights.medium};
    letter-spacing: -0.28px;
    &:hover {
      background-color: ${theme.authColors.darkButtonBackground};
      color: ${theme.authColors.lightText};
    } */
    @media screen and (min-width: ${theme.breakpoints[4]}) {
      width: 344px;
    }
  `;

export const AuthContainer = styled.div`
  ${dynamicStyle};
`;
