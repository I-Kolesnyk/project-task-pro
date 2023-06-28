import { css } from '@emotion/react';
import styled from '@emotion/styled';

const styledDateDeadline = ({ theme }) => css`
  position: absolute;
  top: 0;
  left: 0;
  color: ${theme.textColors.accent};
  font-size: ${theme.fontSizes[3]};
  font-weight: ${theme.fontWeights.medium};
  letter-spacing: -0.28px;
`;

export const StyledInput = styled.div`
  position: relative;
  opacity: 0;
  z-index: 20;
`;

const styledContainer = ({ theme }) => css`
  position: relative;
  margin-bottom: 20px;
  & .react-datepicker {
    background-color: ${theme.backgroundColors.main};
  }
  & .react-datepicker__header {
    background-color: ${theme.backgroundColors.main};
    border: none;
    padding-bottom: 0;
  }
  & .react-datepicker__current-month {
    color: ${theme.textColors.main};
    margin: 0 auto;
    width: 197px;
    border-bottom: 1px solid #16161633;

    font-weight: ${theme.fontWeights.medium};
    font-size: ${theme.fontSizes[4]};
    letter-spacing: -0.36px;
  }
  & .react-datepicker__navigation {
    top: 8px;
    &-icon::before {
      border-color: ${theme.textColors.dayColor};

      &:hover {
        color: red;
      }
    }
  }

  & .react-datepicker__day-name {
    font-size: ${theme.fontSizes[3]};
    font-family: Poppins;
    letter-spacing: -0.28px;
    width: 23px;
    line-height: 23px;
    height: 23px;
  }

  & .react-datepicker__day {
    font-size: ${theme.fontSizes[3]};
    font-family: Poppins;
    letter-spacing: -0.28px;
    width: 23px;
    line-height: 23px;
    height: 23px;
    &:hover {
      border-radius: 24px;
      background-color: ${theme.backgroundColors.selectedDateHover};
      color: ${theme.textColors.selectedDate};
    }
    &--selected {
      border-radius: 24px;
      background-color: ${theme.backgroundColors.formButton};
    }
  }
`;

export const Container = styled.div`
  ${styledContainer}
`;

export const DateDeadline = styled.p`
  ${styledDateDeadline}
`;
