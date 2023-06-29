import styled from '@emotion/styled';
import { css } from '@emotion/react';

const dynamicStylesWrapper = ({ theme }) => css`
  padding: 14px 20px 24px;

  @media only screen and (min-width: ${theme.breakpoints[1]}) {
    padding: 26px 32px 32px;
  }
  @media only screen and (min-width: ${theme.breakpoints[2]}) {
    padding: 10px 24px 8px;
  }
`;

export const Wrapper = styled.section`
  ${dynamicStylesWrapper}
`;

const columnListDynamicStyles = ({ theme }) => css`
  display: flex;
  overflow-x: auto;
  /* scroll-snap-type: x mandatory; */

  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-track {
    background-color: ${theme.backgroundColors.scrollBar};
    border-radius: 12px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 12px;
    background-color: ${theme.backgroundColors.scrollBarThumb};
  }
`;

export const ColumnList = styled.ul`
  ${columnListDynamicStyles}
`;

const dynamicStylesHeader = ({ theme }) => css`
  display: flex;
  justify-content: space-between;
  margin-bottom: 39px;

  @media only screen and (min-width: ${theme.breakpoints[1]}) {
    margin-bottom: 26px;
  }
  @media only screen and (min-width: ${theme.breakpoints[2]}) {
    margin-bottom: 10px;
  }
`;

export const Header = styled.header`
  ${dynamicStylesHeader}
`;

const dynamicStylesBoardTitle = ({ theme }) => css`
  color: ${theme.textColors.main};
  font-weight: ${theme.fontWeights.medium};
  line-height: normal;
  letter-spacing: -0.28px;

  @media only screen and (min-width: ${theme.breakpoints[1]}) {
    font-size: ${theme.fontSizes[5]};
    letter-spacing: -0.36px;
  }
`;

export const BoardTitle = styled.h2`
  ${dynamicStylesBoardTitle}
`;
