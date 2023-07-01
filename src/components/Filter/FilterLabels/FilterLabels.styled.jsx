import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const FilterModalWindow = styled.div`
  width: 252px;
`;

const dynamicStylesRadio = ({ theme, clr }) => css`
  position: absolute;
  z-index: -1;
  opacity: 0;

  & + label {
    /* для элемента label связанного с .custom-radio */
    display: flex;
    align-items: center;
    user-select: none;

    color: ${theme.textColors.secondary};
    font-size: ${theme.fontSizes[2]};
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.24px;

    &::before {
      content: '';
      /* создание в label псевдоэлемента  before со следующими стилями */
      display: inline-block;
      width: 14px;
      height: 14px;
      margin-right: 8px;

      background-color: ${theme.labelColors[clr]};

      border-radius: 50%;
      background-repeat: no-repeat;
      background-position: center center;
      background-size: 50% 50%;
    }
  }

  &:checked + label::before {
    background-color: #fffffe00;
  }

  &:checked + label > svg {
    position: absolute;
    top: 0;
    left: 0;

    opacity: 1;
  }
  &:checked + label > span {
    color: ${theme.textColors.main};
  }
  & + label > svg {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
  }
`;

export const CustomRadio = styled.input`
  ${dynamicStylesRadio}
`;
export const CustomRadioContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const RadioItem = styled.li`
  position: relative;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const dynamicStylesLabelColors = ({ theme }) => css`
  margin-bottom: 16px;
  color: ${theme.textColors.main};
  font-style: normal;
  font-weight: ${theme.fontWeights.medium};
  line-height: normal;
  letter-spacing: -0.28px;
`;

export const LabelColors = styled.p`
  ${dynamicStylesLabelColors}
`;

const dynamicStylesShowAllBtn = ({ theme }) => css`
  color: ${theme.textColors.secondary};
  font-size: ${theme.fontSizes[2]};
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.24px;
  text-decoration-line: underline;
`;

export const ShowAllBtn = styled.button`
  ${dynamicStylesShowAllBtn}
`;
