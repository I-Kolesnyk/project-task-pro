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
    opacity: 1;
  }
  & + label > svg {
    opacity: 0;
    margin-left: -14px;
  }
`;

export const CustomRadio = styled.input`
  ${dynamicStylesRadio}
`;
export const CustomRadioContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
