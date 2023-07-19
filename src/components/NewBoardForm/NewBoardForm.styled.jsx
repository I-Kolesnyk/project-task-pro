import styled from '@emotion/styled';
import { css } from '@emotion/react';

const NewBoardTitleDynamicStyles = ({ theme }) => css`
  margin: 0 0 24px 0;
  width: 96px;
  height: 27px;
  left: 24px;
  top: 24px;

  font-style: normal;
  font-weight: ${theme.fontWeights.medium};
  font-size: ${theme.fontSizes[5]};
  line-height: 27px;
  letter-spacing: -0.02em;

  color: ${theme.textColors.main};

  @media screen and (min-width: ${theme.breakpoints[3]}) {
    margin-left: 24px;
    width: 212px;
    height: 272px;
    padding: 20px;
  }
`;

export const NewBoardTitle = styled.h2`
  ${NewBoardTitleDynamicStyles}
`;

const errorMessageDynamicStyles = ({ theme }) => css`
  color: ${theme.textColors.main};
  margin-bottom: 10px;
  text-align: center;
`;

export const ErrorMessage = styled.p`
  ${errorMessageDynamicStyles};
`;

const InputDynamicStyles = ({ theme }) => css`
  box-sizing: border-box;
  margin: 0 0 24px 0;
  width: 302px;
  height: 49px;
  padding-left: 20px;

  background: transparent;
  opacity: 0.4;
  border: 1px solid #bedbb0;
  box-shadow: 0px 4px 16px rgba(22, 22, 22, 0.08);
  border-radius: 8px;

  color: ${theme.textColors.logo};

  &::placeholder {
    width: 28px;
    height: 21px;
    left: 18px;
    top: 14px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: -0.02em;
    color: #bedbb0;
  }

  &:not(:placeholder-shown) {
    opacity: 1;
    color: ${theme.backgroundColors.burger};
  }

  &:focus {
    opacity: 1;
    outline: none;
    border: 1px solid #bedbb0;
  }

  @media screen and (min-width: ${theme.breakpoints[3]}) {
    margin-left: 24px;
    width: 212px;
    height: 272px;
    padding: 20px;
  }
`;

export const Input = styled.input`
  ${InputDynamicStyles}
`;

const IconTitleDynamicStyles = ({ theme }) => css`
  margin: 0 0 14px 0;

  font-style: normal;
  font-weight: ${theme.fontWeights.medium};
  font-size: ${theme.fontSizes[3]};
  line-height: 21px;
  letter-spacing: -0.02em;

  color: ${theme.textColors.main};

  @media screen and (min-width: ${theme.breakpoints[3]}) {
    margin-left: 24px;
    width: 212px;
    height: 272px;
    padding: 20px;
  }
`;

export const IconTitle = styled.h3`
  ${IconTitleDynamicStyles}
`;

export const IconWrap = styled.div`
  margin: 0 0 24px 0;
`;

const IconDynamicStyles = ({ theme, selected }) => css`
  margin-right: 8px;
  width: 18px;
  height: 18px;

  stroke: ${selected ? theme.textColors.main : 'grey'};

  cursor: pointer;

  @media screen and (min-width: ${theme.breakpoints[3]}) {
    margin-left: 24px;
    width: 212px;
    height: 272px;
    padding: 20px;
  }
`;

export const Icon = styled.svg`
  ${IconDynamicStyles}
`;

const BackgroundTitleDynamicStyles = ({ theme }) => css`
  margin: 0 0 14px 0;

  font-style: normal;
  font-weight: ${theme.fontWeights.medium};
  font-size: ${theme.fontSizes[3]};
  line-height: 21px;
  letter-spacing: -0.02em;

  color: ${theme.textColors.main};

  @media screen and (min-width: ${theme.breakpoints[3]}) {
    margin-left: 24px;
    width: 212px;
    height: 272px;
    padding: 20px;
  }
`;

export const BackgroundTitle = styled.h3`
  ${BackgroundTitleDynamicStyles}
`;

export const BgIcon = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 260px;
  gap: 4px;

  margin-bottom: 40px;
`;

export const BackgroundItem = styled.div`
  cursor: pointer;
  transition: transform 0.3s;
  transform: ${({ isActive }) => (isActive ? 'scale(0.7)' : 'scale(1)')};
  filter: ${({ isActive }) => (isActive ? 'grayscale(100%)' : 'none')};
  filter: ${({ isActive }) => (isActive ? 'brightness(60%)' : 'none')};

  border-radius: 6px;
  overflow: hidden;

  &:hover {
    transform: scale(1.1);
  }
`;

export const BackgroundImage = styled.img`
  width: 28px;
  height: 28px;
`;
