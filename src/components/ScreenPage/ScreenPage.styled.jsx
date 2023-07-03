import styled from '@emotion/styled';
import { css } from '@emotion/react';

const dynamicStylesWrapper = ({
  theme: { breakpoints },
  background: { mobile, tablet, desktop },
}) => css`
  height: calc(100vh - 60px);
  padding: 14px 0 24px 20px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background: url(${mobile.link1x || ''});
  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-image: url(${mobile.link2x || ''});
  }
  @media only screen and (min-width: ${breakpoints[1]}) {
    height: calc(100vh - 68px);
    padding: 26px 0 32px 32px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-image: url(${tablet.link1x || ''});
  }
  @media screen and (min-width: ${breakpoints[1]}) and (min-device-pixel-ratio: 2),
    screen and (min-width: ${breakpoints[1]}) and (min-resolution: 192dpi),
    screen and (min-width: ${breakpoints[1]}) and (min-resolution: 2dppx) {
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-image: url(${tablet.link2x || ''});
  }
  @media only screen and (min-width: ${breakpoints[2]}) {
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    padding: 10px 0 8px 24px;
    background-image: url(${desktop.link1x || ''});
  }
  @media screen and (min-width: ${breakpoints[2]}) and (min-device-pixel-ratio: 2),
    screen and (min-width: ${breakpoints[2]}) and (min-resolution: 192dpi),
    screen and (min-width: ${breakpoints[2]}) and (min-resolution: 2dppx) {
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-image: url(${desktop.link2x || ''});
  }
`;

export const Wrapper = styled.section`
  ${dynamicStylesWrapper}
`;

const columnListDynamicStyles = ({ theme }) => css`
  display: flex;
  padding-bottom: 24px;

  @media only screen and (min-width: ${theme.breakpoints[1]}) {
    padding-bottom: 52px;
  }

  @media only screen and (min-width: ${theme.breakpoints[2]}) {
    padding-bottom: 16px;
  }

  overflow-x: auto;
  overflow-y: hidden;
  scroll-snap-type: x mandatory;

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

  ::-webkit-scrollbar-button:horizontal:end:increment {
    width: 24px;
    background: transparent;
    background-color: transparent;
  }
`;

export const ColumnList = styled.ul`
  ${columnListDynamicStyles}
`;

const dynamicStylesHeader = ({ theme }) => css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 20px;
  margin-bottom: 39px;

  @media only screen and (min-width: ${theme.breakpoints[1]}) {
    padding-right: 32px;
    margin-bottom: 26px;
  }
  @media only screen and (min-width: ${theme.breakpoints[2]}) {
    padding-right: 24px;
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

const dynamicStylesFilters = ({ theme }) => css`
  display: flex;
  align-items: center;
  height: 20px;
  font-style: normal;
  font-weight: ${theme.fontWeights.medium};
  line-height: normal;
  letter-spacing: -0.28px;
  color: ${theme.textColors.theme};
  transition: color 250ms ease-in 0s;

  &:hover,
  &focus {
    color: ${theme.textColors.accent};
  }
`;

export const Filters = styled.button`
  ${dynamicStylesFilters}
`;

const dynamicStylesFilterIcon = ({ theme }) => css`
  width: 16px;
  height: 16px;
  margin-right: 8px;
  stroke: currentColor;
  transition: stroke 250ms ease-in 0s;
  &:hover,
  &focus {
    stroke: currentColor;
  }
`;

export const FilterIcon = styled.svg`
  ${dynamicStylesFilterIcon}
`;

