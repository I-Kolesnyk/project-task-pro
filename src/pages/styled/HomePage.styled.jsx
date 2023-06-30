import styled from '@emotion/styled';
import { css } from '@emotion/react';

const HomePageDynamicStyles = ({ theme }) =>
  css`
    width: 335px;
    min-height: 80vh;
    // display: flex;
    text-align: center;
    color: ${theme.textColors.theme};
    font-size: ${theme.fontSizes[2]};
    line-height: 1.5;
    letter-spacing: -0.26px;
    // display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 0 auto;

    @media only screen and (min-width: ${theme.breakpoints[1]}) {
      width: 486px;
      flex-direction: column;
      font-size: ${theme.fontSizes[3]};
      line-height: 1.28571;
    }
  `;

export const HomePageContainer = styled.div`
  ${HomePageDynamicStyles}
`;

const HomePageTextDynnamicStyles = ({ theme }) => css`
  width: 335px;
  @media only screen and (min-width: ${theme.breakpoints[1]}) {
    width: 486px;
  }
`;

export const HomePageText = styled.p`
  ${HomePageTextDynnamicStyles}
`;

const HomePageBtnDynamicStyles = ({ theme }) => css`
  color: ${theme.textColors.accent};
`;

export const HomePageCreateBoardBtn = styled.button`
  ${HomePageBtnDynamicStyles}
`;
