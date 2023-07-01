import styled from '@emotion/styled';
import { css } from '@emotion/react';

const dynamicStylesRadio = ({ theme, clr }) => css`
  position: absolute;
  z-index: -1;
  opacity: 0;

  & + label {
    /* для элемента label связанного с .custom-radio */
    display: flex;
    align-items: center;
    user-select: none;

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
    top: 3px;
    left: 0;

    opacity: 1;
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
